const Skills = () => {
  const skills = [
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "TypeScript",
    "Zustand / Context API",
    "Git",
    "Vite",
    "Responsive Design"
  ]

  return (
    <section style={styles.container}>
      <h2 style={styles.title}>Skills</h2>

      <div style={styles.grid}>
        {skills.map((skill, index) => (
          <div key={index} style={styles.card}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}

const styles = {
  container: {
    padding: "100px 20px",
    background: "#020617",
    color: "white",
    textAlign: "center"
  },
  title: {
    fontSize: "32px",
    marginBottom: "40px",
    color: "#38bdf8"
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "15px"
  },
  card: {
    background: "#0f172a",
    padding: "12px 20px",
    borderRadius: "8px",
    border: "1px solid #1e293b",
    fontSize: "14px"
  }
}

export default Skills