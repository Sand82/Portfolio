import styles from "./Footer.module.css";

const Footer = () : React.JSX.Element => {
  return (
    <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} Aleksandar Stefanov</span>
      <span>.NET / FULL-STACK WEB DEVELOPER</span>
    </footer>
  );
};

export default Footer;
