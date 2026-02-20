import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "80px 20px",
        background: "linear-gradient(180deg, #f8fafc, #eef2ff)"
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center"
        }}
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            fontSize: "36px",
            marginBottom: "10px",
            color: "#0f172a"
          }}
        >
          Let’s Work Together
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            color: "#475569",
            marginBottom: "40px",
            fontSize: "18px"
          }}
        >
          I’m open to React / Frontend / Full Stack opportunities.
        </motion.p>

        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          style={{
            background: "rgba(255,255,255,0.7)",
            backdropFilter: "blur(10px)",
            padding: "40px",
            borderRadius: "16px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
            display: "inline-block"
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              justifyContent: "center"
            }}
          >
            {/* Email Button */}
            <a
              href="mailto:Irene19tayler@outlook.com"
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
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-2px)";
                e.target.style.boxShadow =
                  "0 10px 25px rgba(99,102,241,0.4)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow =
                  "0 6px 20px rgba(99,102,241,0.3)";
              }}
            >
              Email Me
            </a>

            {/* GitHub Button */}
            <a
              href="https://github.com/IreneTayler"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "14px 28px",
                border: "1px solid #cbd5e1",
                color: "#0f172a",
                borderRadius: "10px",
                textDecoration: "none",
                fontWeight: "600",
                background: "white",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#f1f5f9";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "white";
              }}
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;