import type { SectionProps } from "../../Models/Section";
import styles from "./Section.module.css";

const Section = ({
  id,
  sectionNumber,
  title,
  children,
}: SectionProps) : React.JSX.Element => {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.sectionHead}>
        <span>{sectionNumber} /</span>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
};

export default Section;
