import { navigationItems } from "../Data/Portfolio";

interface NavigationProps {
  isOpen: boolean;
  onNavigate: () => void;
}

const Navigation = ({ isOpen, onNavigate }: NavigationProps) => {
  return (
    <nav className={isOpen ? "nav open" : "nav"}>
      {navigationItems.map(([id, label]) => (
        <a key={id} href={`#${id}`} onClick={onNavigate}>
          {label}
        </a>
      ))}
      <a className="nav-cta" href="#contact">
        Contact
      </a>
    </nav>
  );
};

export default Navigation;
