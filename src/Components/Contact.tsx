import { Github, Mail, Phone } from "lucide-react";
import { contactData, github } from "../Data/Portfolio";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div>
        <p className="kicker">{contactData.kicker}</p>
        <h2>
          {contactData.title}
          <br />
          <em>{contactData.titleAccent}</em>
        </h2>
      </div>
      <div className="contact-links">
        <a href={`mailto:${contactData.email}`}>
          <Mail />
          {contactData.email}
        </a>
        <a href={contactData.phoneHref}>
          <Phone />
          {contactData.phone}
        </a>
        <a href={github} target="_blank" rel="noreferrer">
          <Github />
          {contactData.githubLabel}
        </a>
      </div>
    </section>
  );
};

export default Contact;
