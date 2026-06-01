"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaRobot, FaUser, FaSpinner } from "react-icons/fa";

const questions = [
  "What are you best at?",
  "Tell me about a project you're proud of",
  "How do you work with designers?",
  "Do you actually use AI, or is this just for show?",
];

const demoAnswers: Record<string, string> = {
  "What are you best at?":
    "Turning messy Figma files into working interfaces. I enjoy the translation process — figuring out how to make the design actually work in code without losing the intent. React and TypeScript are my tools of choice.",
  "Tell me about a project you're proud of":
    "The theater management platform at my current job. It started as a simple ticket system but grew into something much larger — guest profiles, payment integration, seating charts. Watching it actually get used by real people is satisfying.",
  "How do you work with designers?":
    "I ask questions early. Better to clarify something in Figma than rebuild it later. I also push back when something won't work technically — but I try to offer alternatives instead of just saying no.",
  "Do you actually use AI, or is this just for show?":
    "Every day. Copilot handles the tedious stuff — writing tests, scaffolding components, suggesting imports. I use ChatGPT for rubber-duck debugging and when I need to understand something unfamiliar quickly. It's a tool, not a replacement for thinking.",
};

interface ChatMessage {
  role: "user" | "assistant";
  text: string;
}

const AIHelper = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [status, setStatus] = useState<{
    message: string;
    type: "success" | "error" | "info" | null;
  }>({ message: "", type: null });
  const [loading, setLoading] = useState(false);
  const [demoMode, setDemoMode] = useState(false);

  const askAI = async (question: string) => {
    setLoading(true);
    setStatus({ message: "AI is thinking...", type: "info" });
    setMessages((prev) => [...prev, { role: "user", text: question }]);

    const systemPrompt =
      "You are an AI assistant representing Irene Tayler, a full-stack web developer. " +
      "Answer questions about her skills, experience, and work approach based on the following profile:\n\n" +
      "- Stack: React, Next.js, TypeScript, Tailwind CSS, Node.js, FastAPI, PHP, MySQL, Docker, Git\n" +
      "- Experience: 5+ years. Freelance (2020-2022), Guangzhou Character Union Media LLC (2022-2025), СЕЧ ГРУПП (2026-present)\n" +
      "- Focus: responsive UI, API integration, Figma-to-code, CMS (WordPress), payment integration (YooKassa), performance optimization\n" +
      "- AI usage: ChatGPT and GitHub Copilot for code generation, architecture decisions, and debugging\n" +
      "- Projects: theater management platform (Convex + Next.js + YooKassa), internal dashboards (Vue.js + Node.js)\n" +
      "- Contact: irene_tayler@mail.ru, +7 981 932-52-95, St. Petersburg, Russia\n" +
      "Keep answers concise (2-3 sentences), professional, and first-person.";

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ system: systemPrompt, prompt: question }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setMessages((prev) => [...prev, { role: "assistant", text: data.summary }]);
        setStatus({ message: "", type: null });
      } else if (
        data.message?.toLowerCase().includes("openai_api_key") ||
        data.message?.toLowerCase().includes("not configured")
      ) {
        setDemoMode(true);
        setMessages((prev) => [
          ...prev,
          { role: "assistant", text: demoAnswers[question] || "I'm ready to answer questions once the AI service is fully configured." },
        ]);
        setStatus({ message: "", type: null });
      } else {
        setStatus({ message: data.message || "AI service error.", type: "error" });
      }
    } catch {
      setStatus({ message: "Network error. Please try again.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai" className="relative w-full py-20 bg-[#061010] text-white px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-[#00ff88] mb-4">Ask Me Anything</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            An AI assistant trained on my actual work. Ask whatever you want to know.
          </p>
        </motion.div>

        <motion.div
          className="rounded-3xl border border-[#00ff88]/30 bg-black/40 p-6 md:p-8 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {/* Question chips */}
          <div className="flex flex-wrap gap-3 mb-6">
            {questions.map((q) => (
              <button
                key={q}
                type="button"
                onClick={() => askAI(q)}
                disabled={loading}
                className="px-4 py-2 rounded-full border border-[#00ff88]/40 text-sm text-[#00ff88] hover:bg-[#00ff88]/10 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Chat area */}
          <div className="rounded-2xl border border-white/10 bg-[#071010] p-4 md:p-6 min-h-[200px] max-h-[400px] overflow-y-auto space-y-4 custom-scroll">
            {messages.length === 0 && (
              <p className="text-gray-500 text-center py-8">
                Select a question above to start a conversation with the AI assistant.
              </p>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "assistant" && (
                  <div className="w-8 h-8 rounded-full bg-[#00ff88]/20 flex items-center justify-center shrink-0">
                    <FaRobot className="text-[#00ff88] text-sm" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-[#00ff88]/20 text-white"
                      : "bg-[#0b1a1a] text-gray-200 border border-[#00ff88]/10"
                  }`}
                >
                  {msg.text}
                </div>
                {msg.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <FaUser className="text-white text-sm" />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <FaSpinner className="animate-spin" />
                <span>Generating response...</span>
              </div>
            )}
          </div>

          {demoMode && (
            <p className="mt-4 text-xs text-gray-500">
              Demo mode — the AI backend isn&apos;t connected right now, so you&apos;re seeing my actual thoughts instead.
            </p>
          )}
          {status.message && status.type === "error" && (
            <p className="mt-4 text-sm text-red-400">{status.message}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default AIHelper;
