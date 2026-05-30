import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt, system } = await req.json();
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { success: false, message: "OPENAI_API_KEY is not configured." },
        { status: 500 }
      );
    }

    const messages: Array<{ role: string; content: string }> = [
      {
        role: "system",
        content:
          system ||
          "You are a helpful assistant that writes professional summaries for a developer portfolio.",
      },
      {
        role: "user",
        content:
          prompt ||
          "Generate an engaging two-sentence profile summary for a full-stack web developer with experience in frontend development, API integration, responsive layouts, and AI-assisted tooling.",
      },
    ];

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages,
        max_tokens: 250,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenAI request failed:", errorText);
      return NextResponse.json(
        { success: false, message: "AI service returned an error." },
        { status: 502 }
      );
    }

    const data = await response.json();
    const summary = data?.choices?.[0]?.message?.content?.trim() ?? "";

    return NextResponse.json({ success: true, summary });
  } catch (error) {
    console.error("AI route error:", error);
    return NextResponse.json(
      { success: false, message: "Unable to generate AI summary." },
      { status: 500 }
    );
  }
}
