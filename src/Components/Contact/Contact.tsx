import { Mail, Phone } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { contactData, github } from "../../Data/Portfolio";
import styles from "./Contact.module.css";

const Contact = (): React.JSX.Element => {
  return (
    <section id="contact" className={styles.contact}>
      <div>
        <p className={styles.kicker}>{contactData.kicker}</p>
        <h2>
          {contactData.title}
          <br />
          <em>{contactData.titleAccent}</em>
        </h2>
      </div>
      <div className={styles.contactLinks}>
        <a href={`mailto:${contactData.email}`}>
          <Mail />
          {contactData.email}
        </a>
        <a href={contactData.phoneHref}>
          <Phone />
          {contactData.phone}
        </a>
        <a href={github} target="_blank" rel="noreferrer">
          <SiGithub size={24} />
          {contactData.githubLabel}
        </a>
      </div>
    </section>
  );
};

export default Contact;
