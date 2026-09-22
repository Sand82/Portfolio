import { ArrowUpRight, Download, Github } from "lucide-react";
import { github, heroData } from "../../Data/Portfolio";
import styles from "./Hero.module.css";

const Hero = () : React.JSX.Element => {
  const { terminal } = heroData;

  return (
    <section id="about" className={styles.hero}>
      <div>
        <div className={styles.availability}>
          <i /> {heroData.availability}
        </div>
        <p className={styles.kicker}>{heroData.kicker}</p>
        <h1>
          {heroData.firstName}
          <br />
          <em>{heroData.lastName}</em>
        </h1>
        <p className={styles.heroRole}>{heroData.role}</p>
        <p className={styles.heroText}>{heroData.description}</p>
        <div className={styles.actions}>
          <a className={`${styles.button} ${styles.primary}`} href={heroData.cvPath} download>
            <Download size={17} />
            Download CV
          </a>
          <a
            className={`${styles.button} ${styles.secondary}`}
            href={github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={17} />
            GitHub <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
      <div className={styles.heroCard}>
        <div className={styles.terminalTop}>
          <span />
          <span />
          <span />
        </div>
        <div className={styles.terminal}>
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
          <div className={styles.cursor}>_</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
