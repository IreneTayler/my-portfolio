import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        padding: "80px 20px",
        background: "linear-gradient(180deg, #ffffff, #f8fafc)"
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          gap: "40px",
          alignItems: "center"
        }}
      >
        {/* LEFT */}
        <div>
          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              color: "#6366f1",
              fontWeight: "600",
              marginBottom: "10px",
              fontSize: "14px",
              letterSpacing: "1px"
            }}
          >
            React / Frontend / Full Stack Developer
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{
              fontSize: "48px",
              lineHeight: "1.2",
              color: "#0f172a",
              marginBottom: "20px"
            }}
          >
            Hi, I’m{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #3b82f6, #6366f1)",
                WebkitBackgroundClip: "text",
                color: "transparent"
              }}
            >
              Irene Tayler
            </span>
          </motion.h1>

          {/* 핵심 문장 (중요) */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: "18px",
              color: "#475569",
              marginBottom: "30px",
              maxWidth: "520px",
              lineHeight: "1.6"
            }}
          >
            I build scalable, production-ready web applications using React,
            modern architecture, and performance-focused development.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}
          >
            <a
              href="/resume.pdf"
              style={{
                padding: "14px 28px",
                background: "linear-gradient(135deg, #3b82f6, #6366f1)",
                color: "white",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "600",
                boxShadow: "0 6px 20px rgba(99,102,241,0.3)",
                transition: "all 0.3s ease"
              }}
            >
              Download Resume
            </a>

            <a
              href="#projects"
              style={{
                padding: "14px 28px",
                border: "1px solid #cbd5e1",
                borderRadius: "10px",
                textDecoration: "none",
                color: "#0f172a",
                fontWeight: "600",
                background: "white"
              }}
            >
              View Projects
            </a>
          </motion.div>
        </div>

        {/* RIGHT (Photo) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          style={{
            display: "flex",
            justifyContent: "center"
          }}
        >
          <div
            style={{
              width: "260px",
              height: "320px",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              position: "relative"
            }}
          >
            <img
              src={profile}
              alt="Irene"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />

            {/* Glow effect */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(99,102,241,0.15), transparent)"
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;