import { Menu, X } from "lucide-react";
import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import styles from "./Header.module.css";

const Header = () : React.JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.topbar}>
      <a className={styles.brand} href="#about">
        AS<span>.</span>
      </a>
      <button
        className={styles.menu}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
      >
        {isMenuOpen ? <X /> : <Menu />}
      </button>
      <Navigation
        isOpen={isMenuOpen}
        onNavigate={() => setIsMenuOpen(false)}
      />
    </header>
  );
};

export default Header;
