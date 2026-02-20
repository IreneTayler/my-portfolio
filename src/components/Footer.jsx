function Footer() {
  return (
    <footer style={{
      background: "linear-gradient(180deg, #0f172a, #020617)",
      color: "#94a3b8",
      padding: "60px 20px"
    }}>
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "30px"
      }}>
        {/* Left */}
        <div>
          <h3 style={{ color: "white", marginBottom: "10px" }}>
            Irene Tayler
          </h3>
          <p>React / Full Stack Developer</p>
          <p style={{ marginTop: "8px", fontSize: "14px" }}>
            Building scalable web applications with modern architecture.
          </p>
        </div>

        {/* Right */}
        <div>
          <h4 style={{ color: "white", marginBottom: "10px" }}>Contact</h4>
          <p>Email: Irene19tayler@outlook.com</p>
          <p>
            <a
              href="https://github.com/IreneTayler"
              target="_blank"
              style={{ color: "#60a5fa", textDecoration: "none" }}
            >
              GitHub
            </a>
          </p>
        </div>
      </div>

      <div style={{
        borderTop: "1px solid #1e293b",
        marginTop: "40px",
        paddingTop: "20px",
        textAlign: "center",
        fontSize: "14px"
      }}>
        © 2026 Irene Tayler. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;