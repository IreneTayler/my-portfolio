"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<{ message: string; type: "success" | "error" | null }>({ message: "", type: null });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ message: "Please enter a valid email address.", type: "error" });
      return;
    }
    setStatus({ message: "Sending...", type: null });

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setStatus({ message: "Message sent successfully!", type: "success" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ message: "Failed to send message.", type: "error" });
      }
    } catch (error) {
      setStatus({ message: "Something went wrong!", type: "error" });
    }
  };

  return (
    <section
      id="contact"
      className="relative z-10 w-full py-20 px-6 md:px-12 bg-black/20  text-white overflow-hidden"
      style={{
        scrollMarginTop: "80px", 
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Left: Contact Info */}
        <motion.div
          className="flex-1 space-y-6 will-change-auto"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }} 
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold text-[#00ff88]/50 border-b border-[#00ff88] pb-2 inline-block">
            Contact Me
          </h2>
          <p className="text-gray-100 text-md">
            Feel free to reach out for collaborations, projects, or freelance work.
          </p>

          <div className="space-y-4 text-md">
            <div className="flex items-center gap-3 text-[#00ff88]/70">
              <FaPhone className="text-md" />
              <span className="text-white">+7 981 098 1772</span>
            </div>
            <div className="flex items-center gap-3 text-[#00ff88]/70">
              <FaEnvelope className="text-md" />
              <span className="text-white">Irene19tayler@outlook.com</span>
            </div>
            <div className="flex items-center gap-3 text-[#00ff88]/70">
              <FaMapMarkerAlt className="text-md" />
              <span className="text-white">St. Petersburg, Russia</span>
            </div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          className="flex-1 bg-black/50 p-8 rounded-xl border border-[#00ff88]/50 shadow-lg"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-4 rounded-lg border border-gray-700 bg-black/40 text-white placeholder-gray-400 focus:outline-none focus:border-[#00ff88] focus:shadow-[0_0_12px_#00ff88] text-md"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-4 rounded-lg border border-gray-700 bg-black/40 text-white placeholder-gray-400 focus:outline-none focus:border-[#00ff88] focus:shadow-[0_0_12px_#00ff88] text-md"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              required
              className="p-4 rounded-lg border border-gray-700 bg-black/40 text-white placeholder-gray-400 focus:outline-none focus:border-[#00ff88] focus:shadow-[0_0_12px_#00ff88] text-md"
            />
            <button
              type="submit"
              className="mt-2 px-6 py-3 bg-[#00ff88] text-black font-semibold rounded-lg hover:bg-[#00c950] hover:shadow-[0_0_15px_#00ff88] transition-all duration-300 text-md"
            >
              Send Message
            </button>
          </form>

          {status.message && (
            <p
              className={`mt-5 text-center text-md font-medium ${
                status.type === "error" ? "text-red-500" : "text-[#00ff88]"
              }`}
            >
              {status.message}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
