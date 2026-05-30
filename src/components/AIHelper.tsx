"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaRobot, FaUser, FaSpinner } from "react-icons/fa";

const questions = [
  "What is your strongest technical skill?",
  "Describe your experience with API integration.",
  "How do you approach responsive design?",
  "What role does AI play in your daily workflow?",
];

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

  const askAI = async (question: string) => {
    setLoading(true);
    setStatus({ message: "AI is thinking...", type: "info" });
    setMessages((prev) => [...prev, { role: "user", text: question }]);

    const systemPrompt =
      "You are an AI assistant representing Irene Tayler, a full-stack web developer. " +
      "Answer questions about her skills, experience, and work approach based on the following profile:\n\n" +
      "- Stack: React, Next.js, TypeScript, Tailwind CSS, Node.js, FastAPI, PHP, MySQL, Docker, Git\n" +
      "- Experience: 4+ years. Frontend & Web Developer (2021-2024), Full-Stack Developer (2024-present)\n" +
      "- Focus: responsive UI, API integration, Figma-to-code, CMS (WordPress), performance optimization\n" +
      "- AI usage: ChatGPT and GitHub Copilot for code generation, architecture decisions, and debugging\n" +
      "- Projects: Kindertales (landing page recreation), MyAIWiz (landing page), Construkted (3D platform UI)\n" +
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
          <h2 className="text-4xl font-bold text-[#00ff88] mb-4">AI Integration</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            This section demonstrates a real AI assistant powered by OpenAI. Ask a question about my profile — the backend securely forwards the request and returns a contextual answer.
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
          <div className="rounded-2xl border border-white/10 bg-[#071010] p-4 md:p-6 min-h-[200px] max-h-[400px] overflow-y-auto space-y-4">
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

          {status.message && status.type === "error" && (
            <p className="mt-4 text-sm text-red-400">{status.message}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default AIHelper;
