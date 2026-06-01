import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

// Diagnostic endpoint to check email configuration
export async function GET() {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const owner = process.env.EMAIL_TO;

  const config = {
    EMAIL_USER: user ? "✓ set" : "✗ missing",
    EMAIL_PASS: pass ? "✓ set (length: " + pass.length + ")" : "✗ missing",
    EMAIL_TO: owner ? "✓ set" : "✗ missing",
    NODE_ENV: process.env.NODE_ENV,
  };

  // Try to verify SMTP connection
  let smtpStatus = "Not tested";
  if (user && pass) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });
    try {
      await transporter.verify();
      smtpStatus = "✓ SMTP connection successful";
    } catch (err) {
      smtpStatus = "✗ SMTP failed: " + (err instanceof Error ? err.message : String(err));
    }
  } else {
    smtpStatus = "✗ Cannot test SMTP - credentials missing";
  }

  return NextResponse.json({
    config,
    smtpStatus,
    message: user && pass && owner
      ? "Configuration appears complete. SMTP test results above."
      : "Configuration INCOMPLETE. Set EMAIL_USER, EMAIL_PASS, EMAIL_TO in Vercel/Netlify dashboard.",
  });
}

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = (await req.json()) as ContactPayload;

    if (!name?.trim() || !email?.trim() || !phone?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, message: "All fields are required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[0-9\s\-()]{7,20}$/;

    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid phone number." },
        { status: 400 }
      );
    }

    const user = process.env.EMAIL_USER;
    const pass = process.env.EMAIL_PASS;
    const owner = process.env.EMAIL_TO;

    console.log("Email config check:", { user: !!user, pass: !!pass, owner: !!owner, passLength: pass?.length });

    if (!user || !pass || !owner) {
      console.log("DEMO MODE: Missing env vars", { user, pass: pass ? "***" : undefined, owner });
      return NextResponse.json(
        {
          success: true,
          demo: true,
          config: { user: !!user, pass: !!pass, owner: !!owner },
          message: "Message received (demo mode — email transport not configured). Set EMAIL_USER, EMAIL_PASS, EMAIL_TO in your deployment dashboard.",
        },
        { status: 200 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user,
        pass,
      },
    });

    // Verify connection before sending — catches auth issues early
    try {
      await transporter.verify();
    } catch (verifyErr) {
      const errMsg = verifyErr instanceof Error ? verifyErr.message : String(verifyErr);
      console.error("Nodemailer verify failed:", errMsg);
      return NextResponse.json(
        {
          success: false,
          message: `Email authentication failed: ${errMsg}. If using Gmail, ensure 2FA is enabled and EMAIL_PASS is a 16-character App Password (not your regular password).`,
        },
        { status: 500 }
      );
    }

    const baseText = `You have received a new message from your portfolio contact form.

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}`;

    const ownerMail = {
      from: `"Portfolio Contact" <${user}>`,
      to: owner,
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: baseText,
    };

    const backupMail = {
      from: `"Portfolio Contact" <${user}>`,
      to: user,
      replyTo: email,
      subject: `[BACKUP] Portfolio message from ${name}`,
      text: baseText + "\n\n---\nThis is a backup copy because the primary recipient (mail.ru) may block Gmail emails.",
    };

    const userCopyMail = {
      from: `"Portfolio Contact" <${user}>`,
      to: email,
      subject: `Copy of your message to my portfolio`,
      text: `Thank you for your message.

Here is a copy of what you sent:

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}

I will review your request and reply as soon as possible.`,
    };

    let ownerSent = false;
    let ownerErr = "";
    let backupSent = false;
    let visitorSent = false;
    let visitorErr = "";

    console.log("Attempting to send emails...", { owner, user, visitorEmail: email });

    // Try sending to EMAIL_TO (often mail.ru — may reject Gmail SMTP)
    try {
      console.log("Sending owner email to:", owner);
      const ownerResult = await transporter.sendMail(ownerMail);
      ownerSent = true;
      console.log("Owner email sent:", ownerResult.messageId);
    } catch (err) {
      ownerErr = err instanceof Error ? err.message : String(err);
      console.error("Failed to send owner email to", owner, ":", ownerErr);
    }

    // Always send backup to EMAIL_USER (Gmail) so owner gets the message
    try {
      console.log("Sending backup email to:", user);
      const backupResult = await transporter.sendMail(backupMail);
      backupSent = true;
      console.log("Backup email sent:", backupResult.messageId);
    } catch (err) {
      const backupErr = err instanceof Error ? err.message : String(err);
      console.error("Failed to send backup email to", user, ":", backupErr);
    }

    // Always send visitor copy
    try {
      console.log("Sending visitor copy to:", email);
      const visitorResult = await transporter.sendMail(userCopyMail);
      visitorSent = true;
      console.log("Visitor email sent:", visitorResult.messageId);
    } catch (err) {
      visitorErr = err instanceof Error ? err.message : String(err);
      console.error("Failed to send visitor email to", email, ":", visitorErr);
    }

    console.log("Email results:", { ownerSent, backupSent, visitorSent });

    if (ownerSent && backupSent && visitorSent) {
      return NextResponse.json({ success: true, message: "Message sent successfully to all recipients." });
    } else if (backupSent || ownerSent) {
      return NextResponse.json({
        success: true,
        details: { ownerSent, backupSent, visitorSent, ownerErr, visitorErr },
        message: `Message received. Owner: ${ownerSent ? "✓" : "✗"}, Backup: ${backupSent ? "✓" : "✗"}, Visitor: ${visitorSent ? "✓" : "✗"}. ${!ownerSent ? `Owner failed: ${ownerErr}. ` : ""}${!visitorSent ? `Visitor copy failed: ${visitorErr}` : ""}`,
      });
    } else {
      return NextResponse.json(
        { success: false, details: { ownerSent, backupSent, visitorSent, ownerErr, visitorErr }, message: `Failed to send all messages. Owner: ${ownerErr}, Visitor: ${visitorErr}` },
        { status: 500 }
      );
    }
  } catch (error) {
    const errMsg = error instanceof Error ? error.message : String(error);
    console.error("Email send error:", errMsg);
    return NextResponse.json(
      { success: false, message: `Failed to send message: ${errMsg}` },
      { status: 500 }
    );
  }
}















