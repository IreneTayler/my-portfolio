import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

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

    if (!user || !pass || !owner) {
      return NextResponse.json(
        {
          success: true,
          demo: true,
          message: "Message received (demo mode — email transport not configured).",
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

    // Try sending to EMAIL_TO (often mail.ru — may reject Gmail SMTP)
    try {
      await transporter.sendMail(ownerMail);
      ownerSent = true;
    } catch (err) {
      ownerErr = err instanceof Error ? err.message : String(err);
      console.error("Failed to send owner email to", owner, ":", ownerErr);
    }

    // Always send backup to EMAIL_USER (Gmail) so owner gets the message
    try {
      await transporter.sendMail(backupMail);
      backupSent = true;
    } catch (err) {
      const backupErr = err instanceof Error ? err.message : String(err);
      console.error("Failed to send backup email to", user, ":", backupErr);
    }

    // Always send visitor copy
    await transporter.sendMail(userCopyMail);

    if (ownerSent && backupSent) {
      return NextResponse.json({ success: true, message: "Message sent successfully to all recipients." });
    } else if (backupSent) {
      return NextResponse.json({
        success: true,
        message: `Message received. Primary delivery to ${owner} failed (${ownerErr}). A backup copy was sent to your Gmail inbox (${user}). Please check Gmail — mail.ru often blocks emails from Gmail SMTP.`,
      });
    } else {
      return NextResponse.json(
        { success: false, message: `Failed to send message. Primary: ${ownerErr}` },
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















