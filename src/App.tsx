import {
  ArrowUpRight,
  CalendarDays,
  Code2,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} 
from "lucide-react";
import { useState, type ReactNode } from "react";
import {
  certificates,
  github,
  navigationItems,
  personalProjects,
  projects,
  skills,
} from "./Data/Portfolio";

const Section = ({
  id,
  n,
  title,
  children,
}: {
  id: string;
  n: string;
  title: string;
  children: ReactNode;
}) => {
  return (
    <section id={id} className="section">
      <div className="section-head">
        <span>{n} /</span>
        <h2>{title}</h2>
      </div>
      {children}
    </section>
  );
};

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="app">
      <header className="topbar">
        <a className="brand" href="#about">
          AS<span>.</span>
        </a>
        <button className="menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
        <nav className={open ? "nav open" : "nav"}>
          {navigationItems.map(([a, b]) => (
            <a key={a} href={"#" + a} onClick={() => setOpen(false)}>
              {b}
            </a>
          ))}
          <a className="nav-cta" href="#contact">
            Contact
          </a>
        </nav>
      </header>
      <main>
        <section id="about" className="hero">
          <div>
            <div className="availability">
              <i /> Open to .NET / Web opportunities
            </div>
            <p className="kicker">SOFTWARE DEVELOPER · SOFIA, BULGARIA</p>
            <h1>
              Aleksandar
              <br />
              <em>Stefanov</em>
            </h1>
            <p className="hero-role">.NET / FULL-STACK WEB DEVELOPER</p>
            <p className="hero-text">
              Software Developer with nearly four years of professional
              experience at DXC Technology, working across .NET, ASP.NET Core,
              C#, React, Angular, TypeScript/JavaScript, MSSQL, REST APIs and
              Microsoft Power Platform.
            </p>
            <div className="actions">
              <a
                className="button primary"
                href="/Aleksandar_Stefanov_CV.pdf"
                download
              >
                <Download size={17} />
                Download CV
              </a>
              <a
                className="button secondary"
                href={github}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} />
                GitHub <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
          <div className="hero-card">
            <div className="terminal-top">
              <span />
              <span />
              <span />
            </div>
            <div className="terminal">
              <div>
                <b>01</b>
                <i>const</i> developer = &#123;
              </div>
              <div>
                <b>02</b>&nbsp;&nbsp;name: <em>"Aleksandar"</em>,
              </div>
              <div>
                <b>03</b>&nbsp;&nbsp;focus: <em>".NET + Web"</em>,
              </div>
              <div>
                <b>04</b>&nbsp;&nbsp;frontend: [<em>"React"</em>,{" "}
                <em>"Angular"</em>],
              </div>
              <div>
                <b>05</b>&nbsp;&nbsp;backend: [<em>"C#"</em>,{" "}
                <em>"ASP.NET Core"</em>],
              </div>
              <div>
                <b>06</b>&nbsp;&nbsp;cloud: [<em>"Azure"</em>,{" "}
                <em>"Firebase"</em>],
              </div>
              <div>
                <b>07</b>&#125;;
              </div>
              <div className="cursor">_</div>
            </div>
          </div>
        </section>
        <Section id="experience" n="01" title="Professional experience">
          <div className="timeline">
            <article className="job">
              <div className="job-date">
                <CalendarDays size={15} />
                Sep 2022 — Present
              </div>
              <div>
                <h3>DXC Technology</h3>
                <p className="role">
                  Software Developer / Full-Stack Developer
                </p>
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
        <Section id="skills" n="02" title="Technical skills">
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
        <Section id="projects" n="03" title="Selected personal projects">
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
        <Section id="education" n="04" title="Education & training">
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
              C# Fundamentals & Advanced · C# OOP · C# Web Basics · ASP.NET Core
              · Entity Framework Core · MS SQL · JavaScript Applications · React
              · Containers & Cloud · Software Engineering & DevOps · Angular ·
              Java
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
        <section id="contact" className="contact">
          <div>
            <p className="kicker">LET'S CONNECT</p>
            <h2>
              Have a project
              <br />
              <em>in mind?</em>
            </h2>
          </div>
          <div className="contact-links">
            <a href="mailto:aleksandarsteffanov@gmail.com">
              <Mail />
              aleksandarsteffanov@gmail.com
            </a>
            <a href="tel:+359885508911">
              <Phone />
              +359 885 508 911
            </a>
            <a href={github} target="_blank" rel="noreferrer">
              <Github />
              github.com/Sand82
            </a>
          </div>
        </section>
      </main>
      <footer>
        <span>© {new Date().getFullYear()} Aleksandar Stefanov</span>
        <span>.NET / FULL-STACK WEB DEVELOPER</span>
      </footer>
    </div>
  );
};

export default App;
