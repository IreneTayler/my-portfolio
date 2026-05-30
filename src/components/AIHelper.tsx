"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const AIHelper = () => {
  const [summary, setSummary] = useState("");
  const [status, setStatus] = useState<{
    message: string;
    type: "success" | "error" | "info" | null;
  }>({ message: "", type: null });
  const [loading, setLoading] = useState(false);

  const handleGenerateSummary = async () => {
    setLoading(true);
    setStatus({ message: "Generating AI summary...", type: "info" });

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt:
            "Generate an engaging two-sentence profile summary for a full-stack developer with experience in front-end development, API integration, responsive design, and AI-assisted workflows.",
        }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        setSummary(data.summary);
        setStatus({ message: "AI summary generated.", type: "success" });
      } else {
        setSummary("");
        setStatus({ message: data.message || "Unable to generate summary.", type: "error" });
      }
    } catch {
      setStatus({ message: "AI service error. Please try again later.", type: "error" });
      setSummary("");
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
            This section demonstrates a lightweight OpenAI integration to generate polished profile copy on demand. It shows a backend API forwarding an AI request securely from the server.
          </p>
        </motion.div>

        <motion.div
          className="rounded-3xl border border-[#00ff88]/30 bg-black/40 p-8 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-semibold text-white">AI Profile Summary</h3>
              <p className="text-gray-400 mt-2">Click the button to generate an AI-assisted summary of my developer profile.</p>
            </div>
            <button
              type="button"
              onClick={handleGenerateSummary}
              disabled={loading}
              className="inline-flex items-center justify-center rounded-full bg-[#00ff88] px-6 py-3 text-black font-semibold transition hover:bg-[#00e07a] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Generating..." : "Generate summary"}
            </button>
          </div>

          {status.message && (
            <p className={`text-sm ${status.type === "error" ? "text-red-400" : status.type === "success" ? "text-[#00ff88]" : "text-gray-300"} mb-6`}>
              {status.message}
            </p>
          )}

          {summary ? (
            <div className="rounded-2xl border border-[#00ff88]/20 bg-[#0b1a1a] p-6 text-gray-200">
              <p className="text-lg leading-relaxed">{summary}</p>
            </div>
          ) : (
            <div className="rounded-2xl border border-white/10 bg-[#071010] p-6 text-gray-400">
              <p>No AI summary generated yet. Use the button to create one.</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default AIHelper;
