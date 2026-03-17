import { FaGithub } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Header({ language, setLanguage }) {
  const location = useLocation();

  const text = {
    en: {
      welcome: "Welcome to my Website",
      home: "Home",
      contact: "Contact",
      projects: "Projects",
      resume: "Resume",
    },
    de: {
      welcome: "Willkommen auf meiner Website",
      home: "Startseite",
      contact: "Kontakt",
      projects: "Projekte",
      resume: "Lebenslaufe",
    },
  };

  return (
    <header className="header">
      <h2 className="logo">
        {location.pathname === "/" ? text[language].welcome : ""}
      </h2>

      <nav className="nav">
        <Link to="/">{text[language].home}</Link>
        <Link to="/contact">{text[language].contact}</Link>
        <Link to="/projects">{text[language].projects}</Link>
        <Link to="/Resume">{text[language].resume}</Link>
        <a href="https://github.com/MaryamKohansal" target="_blank" rel="noopener noreferrer">
          <FaGithub className="github-icon" size={25} />
        </a>
      </nav>
      <nav className="lang-nav">
        <button type="button" onClick={() => setLanguage("de")}>
          DE
        </button>
        <button type="button" onClick={() => setLanguage("en")}>
          EN
        </button>
      </nav>
    </header>
  );
}

export default Header;
