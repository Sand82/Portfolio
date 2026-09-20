import type { SectionProps } from "../Models/Section";

const Section = ({
  id,
  sectionNumber,
  title,
  children,
}: SectionProps) => {
  return (
    <section id={id} className="section">
      <div className="section-head">
        <span>{sectionNumber} /</span>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
};

export default Section;
