import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para" style={{ lineHeight: "1.8", marginTop: "1rem" }}>
          I am a results-driven DevOps Engineer with over 9 years of expertise in architecting, migrating, and managing high-availability infrastructure across AWS and Azure. Specializing in modern DevOps methodologies, I leverage Infrastructure as Code (IaC) to streamline complex deployments, optimize system performance, and enforce strict security standards.
        </p>
      </div>
    </div>
  );
};

export default About;
