const Projects = () => {
  return (
    <section id="projects" style={styles.container}>
      <h2 style={styles.title}>Projects</h2>

      <div style={styles.grid}>
        <div style={styles.card}>
          <h3>Task Manager</h3>
          <p>Todo management app with React and API integration.</p>
          <div style={styles.links}>
            <a href="#">Live</a>
            <a href="#">GitHub</a>
          </div>
        </div>

        <div style={styles.card}>
          <h3>E-commerce UI</h3>
          <p>Shopping interface with cart and responsive design.</p>
          <div style={styles.links}>
            <a href="#">Live</a>
            <a href="#">GitHub</a>
          </div>
        </div>

        <div style={styles.card}>
          <h3>Dashboard</h3>
          <p>Data visualization dashboard with charts.</p>
          <div style={styles.links}>
            <a href="#">Live</a>
            <a href="#">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  )
}

const styles = {
  container: {
    padding: "100px 20px",
    background: "#0f172a",
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
    justifyContent: "center",
    gap: "20px",
    flexWrap: "wrap"
  },
  card: {
    background: "#020617",
    padding: "20px",
    borderRadius: "10px",
    width: "280px"
  },
  links: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "space-between"
  }
}

export default Projects