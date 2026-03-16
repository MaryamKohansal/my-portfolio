import bgImage from "./assets/projectBackground.jpg";
import { useEffect } from "react";

function Projects({ language }) {
  const text = {
    en: {
      p1: `As a student at university, I completed several projects in Python and
        Java as part of my coursework. Additionally, I worked on my Bachelor’s
        project using MATLAB. The topic was Adaptive Cruise Control in different
        driving situations and weather conditions. Since this project was
        completed in a team, I am unable to share the source code and related
        materials.`,

      p2: `My main and most significant project was my Bachelor Thesis, titled
        “Development of an AI Workbench.” I implemented this project using a
        React-based frontend and a Node.js/Express REST API backend.`,

      p3: `The system allows users to create, edit, and manage tools, define
        command-line options, and link input and output artefacts such as text
        files, CSV files, and images. Artefacts support metadata, parameters,
        versioning, and preview functionality. The backend provides RESTful
        endpoints for CRUD operations and stores data in a lightweight JSON
        database.`,

      linkText: "Github",
    },
    de: {
      p1: `Während meines Studiums habe ich im Rahmen verschiedener
          Lehrveranstaltungen mehrere Projekte in Python und Java umgesetzt.
          Darüber hinaus habe ich an meinem Bachelorprojekt mit MATLAB gearbeitet.
          Das Thema war Adaptive Cruise Control in unterschiedlichen
          Fahrsituationen und Wetterbedingungen. Da dieses Projekt im Team
          durchgeführt wurde, kann ich den Quellcode und die zugehörigen
          Materialien leider nicht veröffentlichen.`,
      p2: `Das System ermöglicht es Benutzerinnen und Benutzern, Tools zu erstellen,
          zu bearbeiten und zu verwalten, Kommandozeilenoptionen zu definieren
          sowie Ein- und Ausgabeartefakte wie Textdateien, CSV-Dateien und Bilder
          miteinander zu verknüpfen. Artefakte unterstützen Metadaten, Parameter,
          Versionierung sowie eine Vorschaufunktion. Das Backend stellt RESTful
          Endpunkte für CRUD-Operationen bereit und speichert die Daten in einer
          leichtgewichtigen JSON-Datenbank.`,
      p3: `Der Fokus dieses Projekts lag auf der Entwicklung einer strukturierten
          Benutzeroberfläche zur Integration und Verwaltung von KI-Tools innerhalb
          einer modularen Workflow-Umgebung. `,
      linkText: "Github",
    },
  };

  useEffect(() => {
    document.body.classList.add("project-page");
    return () => document.body.classList.remove("project-page");
  }, []);

  return (
    <div className="project">
      <p>{text[language].p1}</p>
      <p>{text[language].p2}</p>
      <p>{text[language].p3}</p>

      <p>
        The source code is available on my{" "}
        <a href="https://github.com/MaryamKohansal/Bachelor-Thesis-AI-Workbench">
          {text[language].linkText}
        </a>
        .
      </p>

      <div
        className="pr-bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
    </div>
  );
}

export default Projects;
