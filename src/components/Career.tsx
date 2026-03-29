import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cloud Specialist</h4>
                <h5>Toll group - Pune, India</h5>
              </div>
              <h4>May 2025–Present</h4>
            </div>
            <p>
              Leading a managed services team to design, govern, and implement highly available and scalable AWS and Azure enterprise architectures. Driving DevOps excellence by establishing robust CI/CD pipelines using Azure DevOps and GitHub Actions while reducing manual provisioning by 50% via Terraform. Spearheading comprehensive security audits and compliance controls using industry-leading tools like WIZ and Security Hub to ensure secure infrastructure deployments.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Consultant</h4>
                <h5>Capgemini - Pune, India</h5>
              </div>
              <h4>Nov 2023 – May 2025</h4>
            </div>
            <p>
              Spearheaded end-to-end cloud migrations from on-premises environments to AWS and Azure, executing workload assessments and dependency profiling. Architected and managed scalable Azure IaaS and Kubernetes (AKS) clusters utilizing Terraform, ArgoCD, and strict network security controls. Promoted operational efficiency by implementing comprehensive Azure Monitor observability strategies and conducting cost-optimization analyses that reduced infrastructure expenditures by 30%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cloud & Infrastructure Analyst</h4>
                <h5>Toll (India) Logistics Pvt. Ltd</h5>
              </div>
              <h4>May 2021 – Nov 2023</h4>
            </div>
            <p>
              Mentored and led a dynamic cloud engineering team to design, secure, and provision high-performance AWS infrastructure tailored to complex supply chain operations. Executed seamless on-premises to AWS migrations that yielded a 30% performance boost and a 20% reduction in operating costs using Terraform and CloudFormation. Ensured mission-critical reliability and compliance by deploying advanced observability matrices via Grafana and CloudWatch, alongside rigorous security posture audits.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Consultant</h4>
                <h5>Capgemini - Pune, India</h5>
              </div>
              <h4>Mar 2021 – May 2021</h4>
            </div>
            <p>
              Architected and deployed foundational AWS infrastructure from scratch, strictly adhering to Infrastructure as Code (IaC) principles utilizing Terraform and CloudFormation. Collaborated seamlessly with diverse application teams to optimize cloud workloads and drive DevOps automation strategies, significantly accelerating deployment cycles and reinforcing overall operational stability.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cloud Engineer</h4>
                <h5>Blazeclan Technologies - Pune</h5>
              </div>
              <h4>Oct 2016 – Mar 2021</h4>
            </div>
            <p>
              Engineered and maintained highly available, fault-tolerant enterprise cloud environments on AWS, driving holistic digital transformations and database migrations with minimal downtime. Streamlined release methodologies by engineering advanced CI/CD pipelines leveraging Docker, Jenkins, and GitLab. Enhanced system observability utilizing NewRelic and OpsRamp, and systematically applied ITIL-driven protocols to manage infrastructure incidents, DNS health, and continuous cost optimization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
