const Home = () => {
  return (
    <section style={styles.container}>
      <h1 style={styles.name}>Irene</h1>
      <h2 style={styles.title}>React Frontend Developer</h2>
      <p style={styles.desc}>
        I build clean, responsive and user-friendly web applications using React.
      </p>

      <div style={styles.buttons}>
        <a href="https://github.com/" target="_blank" style={styles.button}>
          GitHub
        </a>

        <a href="#projects" style={styles.buttonOutline}>
          View Projects
        </a>
      </div>
    </section>
  )
}

const styles = {
  container: {
    height: "100vh",
    background: "#0f172a",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: "sans-serif"
  },
  name: { fontSize: "48px", marginBottom: "10px" },
  title: { fontSize: "24px", color: "#38bdf8", marginBottom: "20px" },
  desc: {
    maxWidth: "500px",
    fontSize: "16px",
    opacity: 0.8,
    marginBottom: "30px"
  },
  buttons: { display: "flex", gap: "15px" },
  button: {
    padding: "12px 24px",
    background: "#38bdf8",
    color: "#000",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: "bold"
  },
  buttonOutline: {
    padding: "12px 24px",
    border: "1px solid #38bdf8",
    color: "#38bdf8",
    textDecoration: "none",
    borderRadius: "6px"
  }
}

export default Home