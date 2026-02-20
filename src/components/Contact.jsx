import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section style={styles.section} id="contact">
      <motion.div
        style={styles.container}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 style={styles.title}>Let's Work Together</h2>

        <p style={styles.text}>
          I am open to React / Frontend / Full Stack opportunities.
        </p>

        <div style={styles.links}>
          <a href="mailto:Irene19tayler@outlook.com" style={styles.button}>
            Email Me
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            style={styles.buttonOutline}
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}

const styles = {
  section: {
    padding: "100px 20px",
    background: "#ffffff",
    textAlign: "center",
  },
  container: {
    maxWidth: "600px",
    margin: "0 auto",
  },
  title: {
    fontSize: "34px",
    marginBottom: "20px",
    color: "#0f172a",
  },
  text: {
    color: "#475569",
    marginBottom: "30px",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "16px",
  },
  button: {
    padding: "12px 24px",
    background: "#2563eb",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
  },
  buttonOutline: {
    padding: "12px 24px",
    border: "1px solid #2563eb",
    color: "#2563eb",
    borderRadius: "8px",
    textDecoration: "none",
  },
};