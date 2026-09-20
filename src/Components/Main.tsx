import {
  ArrowUpRight,
  CalendarDays,
  Code2,
  ExternalLink,
  GraduationCap,
  MapPin,
} from "lucide-react";
import Contact from "./Contact";
import Hero from "./Hero";
import Section from "./Section";
import {
  certificates,
  personalProjects,
  projects,
  skills,
} from "../Data/Portfolio";

const Main = () => {
  return (
    <main>
      <Hero />
      <Section id="experience" sectionNumber="01" title="Professional experience">
        <div className="timeline">
          <article className="job">
            <div className="job-date">
              <CalendarDays size={15} />
              Sep 2022 — Present
            </div>
            <div>
              <h3>DXC Technology</h3>
              <p className="role">Software Developer / Full-Stack Developer</p>
              <p className="muted">
                <MapPin size={14} />
                Sofia, Bulgaria
              </p>
              {projects.map((p) => (
                <div className="project-entry" key={p[0]}>
                  <div className="project-title">
                    <h4>{p[0]}</h4>
                    <span>{p[1]}</span>
                  </div>
                  <p className="muted">{p[2]}</p>
                  <p className="stack">{p[3]}</p>
                  <ul>
                    {p[4].map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
          <article className="job">
            <div className="job-date">
              <CalendarDays size={15} />
              Apr 2012 — Jun 2022
            </div>
            <div>
              <h3>Actavis / Vetprom</h3>
              <p className="role">Chemist / Chemical Analyst</p>
              <p className="muted">
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
        <div className="skill-grid">
          {Object.entries(skills).map(([g, items]) => (
            <div className="skill-card" key={g}>
              <Code2 size={18} />
              <h3>{g}</h3>
              <div className="chips">
                {items.map((x) => (
                  <span key={x}>{x}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section id="projects" sectionNumber="03" title="Selected personal projects">
        <div className="cards">
          {personalProjects.map((p, i) => (
            <a
              className="project-card"
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
        <div className="education">
          <div className="edu-item">
            <GraduationCap />
            <div>
              <h3>Software University (SoftUni)</h3>
              <p>Back-End Software Engineer with .NET</p>
              <span>2019 — 2022</span>
            </div>
          </div>
          <div className="edu-item">
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
        <div className="training">
          <h3>Relevant training</h3>
          <p>
            C# Fundamentals & Advanced · C# OOP · C# Web Basics · ASP.NET Core ·
            Entity Framework Core · MS SQL · JavaScript Applications · React ·
            Containers & Cloud · Software Engineering & DevOps · Angular · Java
          </p>
        </div>
        <div className="certs">
          <h3>Certificates</h3>
          <div className="cert-list">
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
