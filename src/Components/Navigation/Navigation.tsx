import { navigationItems } from "../../Data/Portfolio";
import styles from "./Navigation.module.css";

interface NavigationProps {
  isOpen: boolean;
  onNavigate: () => void;
}

const Navigation = ({ isOpen, onNavigate }: NavigationProps) => {
  return (
    <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
      {navigationItems.map(([id, label]) => (
        <a key={id} href={`#${id}`} onClick={onNavigate}>
          {label}
        </a>
      ))}
      <a className={styles.navCta} href="#contact">
        Contact
      </a>
    </nav>
  );
};

export default Navigation;
