import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { success: false, message: "OPENAI_API_KEY is not configured." },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are a helpful assistant that writes professional summaries for a developer portfolio.",
          },
          {
            role: "user",
            content: prompt ||
              "Generate an engaging two-sentence profile summary for a full-stack web developer with experience in frontend development, API integration, responsive layouts, and AI-assisted tooling.",
          },
        ],
        max_tokens: 120,
        temperature: 0.8,
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
