import {
  ArrowUpRight,
  CalendarDays,
  Code2,
  ExternalLink,
  GraduationCap,
  MapPin,
} from "lucide-react";
import Contact from "../Contact/Contact";
import Hero from "../Hero/Hero";
import Section from "../Section/Section";
import {
  certificates,
  personalProjects,
  projects,
  relevantTraining,
  skills,
} from "../../Data/Portfolio";
import styles from "./Main.module.css";

const Main = () : React.JSX.Element => {
  return (
    <main className={styles.main}>
      <Hero />
      <Section id="experience" sectionNumber="01" title="Professional experience">
        <div className={styles.timeline}>
          <article className={styles.job}>
            <div className={styles.jobDate}>
              <CalendarDays size={15} />
              Sep 2022 — Present
            </div>
            <div>
              <h3>DXC Technology</h3>
              <p className={styles.role}>Software Developer / Full-Stack Developer</p>
              <p className={styles.muted}>
                <MapPin size={14} />
                Sofia, Bulgaria
              </p>
              {projects.map((p) => (
                <div className={styles.projectEntry} key={p[0]}>
                  <div className={styles.projectTitle}>
                    <h4>{p[0]}</h4>
                    <span>{p[1]}</span>
                  </div>
                  <p className={styles.muted}>{p[2]}</p>
                  <p className={styles.stack}>{p[3]}</p>
                  <ul>
                    {p[4].map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
          <article className={styles.job}>
            <div className={styles.jobDate}>
              <CalendarDays size={15} />
              Apr 2012 — Jun 2022
            </div>
            <div>
              <h3>Actavis / Vetprom</h3>
              <p className={styles.role}>Chemist / Chemical Analyst</p>
              <p className={styles.muted}>
                <MapPin size={14} />
                Dupnica / Radomir, Bulgaria
              </p>
              <ul>
                <li>
                  Quality control and research & development roles in the
                  pharmaceutical sector.
                </li>
              </ul>
            </div>
          </article>
        </div>
      </Section>
      <Section id="skills" sectionNumber="02" title="Technical skills">
        <div className={styles.skillGrid}>
          {Object.entries(skills).map(([g, items]) => (
            <div className={styles.skillCard} key={g}>
              <Code2 size={18} />
              <h3>{g}</h3>
              <div className={styles.chips}>
                {items.map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section id="projects" sectionNumber="03" title="Selected personal projects">
        <div className={styles.cards}>
          {personalProjects.map((p, i) => (
            <a
              className={styles.projectCard}
              href={p[2]}
              target="_blank"
              rel="noreferrer"
              key={p[0]}
            >
              <small>0{i + 1}</small>
              <ExternalLink size={18} />
              <h3>{p[0]}</h3>
              <p>{p[1]}</p>
              <span>
                View on GitHub <ArrowUpRight size={14} />
              </span>
            </a>
          ))}
        </div>
      </Section>
      <Section id="education" sectionNumber="04" title="Education & training">
        <div className={styles.education}>
          <div className={styles.eduItem}>
            <GraduationCap />
            <div>
              <h3>Software University (SoftUni)</h3>
              <p>Back-End Software Engineer with .NET</p>
              <span>2019 — 2022</span>
            </div>
          </div>
          <div className={styles.eduItem}>
            <GraduationCap />
            <div>
              <h3>
                University of Chemical Technology and Metallurgy — Sofia
              </h3>
              <p>Bachelor and Master Degrees in Chemistry</p>
              <span>2006 — 2014</span>
            </div>
          </div>
        </div>
        <div className={styles.training}>
          <h3>Relevant training</h3>
          <div className={styles.trainingTags}>
            {relevantTraining.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <div className={styles.certs}>
          <h3>Certificates</h3>
          <div className={styles.certList}>
            {certificates.map((x) => (
              <span key={x}>{x}</span>
            ))}
          </div>
        </div>
      </Section>
      <Contact />
    </main>
  );
};

export default Main;
