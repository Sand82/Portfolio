import { Menu, X } from "lucide-react";
import { useState } from "react";
import Navigation from "./Navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="topbar">
      <a className="brand" href="#about">
        AS<span>.</span>
      </a>
      <button
        className="menu"
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
