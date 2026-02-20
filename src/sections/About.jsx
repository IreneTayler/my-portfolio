const About = () => {
  return (
    <section style={styles.container}>
      <h2 style={styles.title}>About Me</h2>
      <p style={styles.text}>
        I am a frontend developer specializing in React.
        I graduated from Guangzhou University with a degree in Software Engineering.
        I focus on building responsive interfaces, clean component structures,
        and improving user experience.
      </p>
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
    marginBottom: "20px",
    color: "#38bdf8"
  },
  text: {
    maxWidth: "700px",
    margin: "0 auto",
    lineHeight: "1.6",
    opacity: 0.9
  }
}

export default About