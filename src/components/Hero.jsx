import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";
import { typography } from "../store/typography";

function Hero() {
  return (
    <section id="home" style={styles.section}>
      {/* Background Glow */}
      <div style={styles.glow1} />
      <div style={styles.glow2} />

      <div style={styles.container}>
        {/* Left */}
        <motion.div
          style={styles.left}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p style={styles.role}>React / Full Stack Developer</p>

          <h1 style={typography.heroTitle}>
            Hi, I'm <span style={styles.gradientText}>Irene</span>
          </h1>

          <p style={typography.body}>
            I build scalable, production-ready web applications with clean
            architecture, modern UI, and strong performance.
          </p>

          <div style={styles.buttons}>
            <a href="/resume.pdf" style={styles.primary}>
              Download Resume
            </a>
            <a href="#projects" style={styles.secondary}>
              View Projects
            </a>
          </div>
        </motion.div>

        {/* Right – Floating Image */}
        <motion.div
          style={styles.right}
          animate={{ y: [0, -12, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <img src={profile} alt="profile" style={styles.image} />
        </motion.div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    position: "relative",
    padding: "120px 20px 60px",
    overflow: "hidden",
    background: "#f8fafc",
  },

  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "40px",
    flexWrap: "wrap",
  },

  left: {
    flex: 1,
    minWidth: "300px",
  },

  role: {
    color: "#2563eb",
    fontWeight: 600,
    marginBottom: "10px",
  },

  title: {
    fontSize: "42px",
    fontWeight: 700,
    marginBottom: "16px",
    color: "#0f172a",
  },

  gradientText: {
    background: "linear-gradient(90deg, #2563eb, #7c3aed)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },

  desc: {
    color: "#475569",
    lineHeight: 1.6,
    maxWidth: "520px",
    marginBottom: "24px",
  },

  buttons: {
    display: "flex",
    gap: "16px",
  },

  primary: {
    padding: "12px 22px",
    background: "linear-gradient(90deg, #2563eb, #7c3aed)",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: 500,
    boxShadow: "0 6px 18px rgba(37,99,235,0.25)",
    transition: "0.3s",
  },

  secondary: {
    padding: "12px 22px",
    border: "1px solid #2563eb",
    color: "#2563eb",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: 500,
  },

  right: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    minWidth: "260px",
  },

  image: {
    width: "260px",
    height: "260px",
    objectFit: "cover",
    borderRadius: "20px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
  },

  /* Background Glow */
  glow1: {
    position: "absolute",
    top: "-120px",
    left: "-120px",
    width: "300px",
    height: "300px",
    background: "radial-gradient(circle, rgba(37,99,235,0.25), transparent)",
    filter: "blur(60px)",
  },

  glow2: {
    position: "absolute",
    bottom: "-120px",
    right: "-120px",
    width: "300px",
    height: "300px",
    background: "radial-gradient(circle, rgba(124,58,237,0.25), transparent)",
    filter: "blur(60px)",
  },
};

export default Hero;