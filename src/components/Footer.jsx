export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <h3 style={styles.name}>Irene Tayler</h3>

        <p style={styles.text}>
          React / Full Stack Developer
        </p>

        <div style={styles.links}>
          <a href="mailto:your-email@gmail.com">Email</a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>

        <p style={styles.copy}>
          © {new Date().getFullYear()} Irene Tayler
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#0f172a",
    color: "#fff",
    padding: "60px 20px",
    textAlign: "center",
  },
  container: {
    maxWidth: "800px",
    margin: "0 auto",
  },
  name: {
    marginBottom: "10px",
  },
  text: {
    color: "#94a3b8",
    marginBottom: "20px",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "20px",
  },
  copy: {
    fontSize: "12px",
    color: "#64748b",
  },
};