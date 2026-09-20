import { ArrowUpRight, Download, Github } from "lucide-react";
import { github, heroData } from "../Data/Portfolio";

const Hero = () => {
  const { terminal } = heroData;

  return (
    <section id="about" className="hero">
      <div>
        <div className="availability">
          <i /> {heroData.availability}
        </div>
        <p className="kicker">{heroData.kicker}</p>
        <h1>
          {heroData.firstName}
          <br />
          <em>{heroData.lastName}</em>
        </h1>
        <p className="hero-role">{heroData.role}</p>
        <p className="hero-text">{heroData.description}</p>
        <div className="actions">
          <a className="button primary" href={heroData.cvPath} download>
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
            <b>02</b>&nbsp;&nbsp;name: <em>"{terminal.name}"</em>,
          </div>
          <div>
            <b>03</b>&nbsp;&nbsp;focus: <em>"{terminal.focus}"</em>,
          </div>
          <div>
            <b>04</b>&nbsp;&nbsp;frontend: [<em>"{terminal.frontend[0]}"</em>,{" "}
            <em>"{terminal.frontend[1]}"</em>],
          </div>
          <div>
            <b>05</b>&nbsp;&nbsp;backend: [<em>"{terminal.backend[0]}"</em>,{" "}
            <em>"{terminal.backend[1]}"</em>],
          </div>
          <div>
            <b>06</b>&nbsp;&nbsp;cloud: [<em>"{terminal.cloud[0]}"</em>,{" "}
            <em>"{terminal.cloud[1]}"</em>],
          </div>
          <div>
            <b>07</b>&#125;;
          </div>
          <div className="cursor">_</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
