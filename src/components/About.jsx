import "./About.css";

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <p className="about-intro">
          Full Stack Developer focused on building scalable, production-ready web
          applications with clean architecture and modern user experiences.
        </p>

        <div className="about-grid">
          <div className="about-card">
            <h4>Location</h4>
            <p>Remote / Open to relocation</p>
          </div>

          <div className="about-card">
            <h4>Education</h4>
            <p>B.E. Software Engineering</p>
          </div>

          <div className="about-card">
            <h4>Focus</h4>
            <p>React · Full Stack · Performance</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;