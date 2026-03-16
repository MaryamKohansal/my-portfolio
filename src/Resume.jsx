import cvPhoto from "./assets/cv-photo.jpg";
import { FaCalendarAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import bgImage from "./assets/cv-bg.png";
import { useEffect } from "react";

function Resume({ language }) {
  const text = {
    en: {
      summaryTitle: "SUMMARY",
      summary:
        "Motivated Computer Science graduate with a strong interest in frontend and web development. Solid academic background in JavaScript and React through university projects. Seeking a Junior Software Developer position in Germany.",

      experienceTitle: "WORK EXPERIENCE",
      educationTitle: "EDUCATION",
      languagesTitle: "LANGUAGES",

      jobs: [
        {
          title: "Student Assistant - RPTU Kaiserslautern",
          date: "10/2023 - 04/2026",
          location: "Kaiserslautern, Germany",
        },
        {
          title: "Sales Assistant - Ditch (Prezel Backary Chain)",
          date: "12/2020 - 02/2022",
          location: "Kaiserslautern, Germany",
        },
        {
          title: "Sales Assistant - Construction Company",
          date: "02/2016 - 06/2017",
          location: "Tehran, Iran",
        },
        {
          title: "English Teacher - Kindergarten & School",
          date: "10/2011 - 03/2016",
          location: "Tehran, Iran",
        },
      ],

      education: [
        {
          title: "M.Sc. Computer Science - Hochschule Kaiserslautern",
          date: "03/2026",
          location: "Zweibrücken, Germany",
        },
        {
          title: "B.Sc. Computer Science - RPTU Kaiserslautern",
          date: "10/2021 - 11/2025",
          location: "Kaiserslautern, Germany",
        },
        {
          title: "M.Sc. IT Management (without thesis) - University of Tehran",
          date: "10/2016 - 10/2017",
          location: "Tehran, Iran",
        },
        {
          title: "B.A. English Translation - Payam Noor University",
          date: "10/2011 - 06/2015",
          location: "Tehran, Iran",
        },
      ],

      languages: [
        "English - Intermediate",
        "German - Intermediate",
        "Persian - Native",
      ],
    },

    de: {
      summaryTitle: "ZUSAMMENFASSUNG",
      summary:
        "Motivierte Absolventin der Informatik mit starkem Interesse an Frontend- und Webentwicklung. Solide akademische Kenntnisse in JavaScript und React durch universitäre Projekte. Auf der Suche nach einer Junior-Softwareentwickler-Position in Deutschland.",

      experienceTitle: "BERUFSERFAHRUNG",
      educationTitle: "AUSBILDUNG",
      languagesTitle: "SPRACHEN",

      jobs: [
        {
          title: "Studentische Hilfskraft - RPTU Kaiserslautern",
          date: "10/2023 - 04/2026",
          location: "Kaiserslautern, Deutschland",
        },
        {
          title: "Verkaufsmitarbeiterin - Ditsch (Brezel-Bäckereikette)",
          date: "12/2020 - 02/2022",
          location: "Kaiserslautern, Deutschland",
        },
        {
          title: "Verkaufsmitarbeiterin - Bauunternehmen",
          date: "02/2016 - 06/2017",
          location: "Teheran, Iran",
        },
        {
          title: "Englischlehrerin - Kindergarten & Schule",
          date: "10/2011 - 03/2016",
          location: "Teheran, Iran",
        },
      ],

      education: [
        {
          title: "M.Sc. Informatik - Hochschule Kaiserslautern",
          date: "03/2026",
          location: "Zweibrücken, Deutschland",
        },
        {
          title: "B.Sc. Informatik - RPTU Kaiserslautern",
          date: "10/2021 - 11/2025",
          location: "Kaiserslautern, Deutschland",
        },
        {
          title:
            "M.Sc. IT-Management (ohne Abschlussarbeit) - Universität Teheran",
          date: "10/2016 - 10/2017",
          location: "Teheran, Iran",
        },
        {
          title: "B.A. Übersetzung (Englisch) - Payam Noor Universität",
          date: "10/2011 - 06/2015",
          location: "Teheran, Iran",
        },
      ],

      languages: [
        "Englisch - Mittelstufe",
        "Deutsch - Mittelstufe",
        "Persisch - Muttersprache",
      ],
    },
  };

  useEffect(() => {
    document.body.classList.add("resume-page");
    return () => document.body.classList.remove("resume-page");
  }, []);

  return (
    <div className="context">
      <div className="text1">
        <h3>{text[language].summaryTitle}</h3>
        <p>{text[language].summary}</p>
      </div>

      <div
        className="cv-bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <img src={cvPhoto} alt="CV" className="cvphoto" />

      <div className="experience">
        <h3>{text[language].experienceTitle}</h3>
        <ul>
          {text[language].jobs.map((job, index) => (
            <li key={index}>
              <span className="job-title">{job.title}</span>
              <div className="job-details">
                <span className="date">
                  <FaCalendarAlt className="icon" /> {job.date}
                </span>
                <span className="location">
                  <FaLocationDot className="icon" /> {job.location}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="education">
        <h3>{text[language].educationTitle}</h3>
        <ul>
          {text[language].education.map((edu, index) => (
            <li key={index}>
              <span className="edu-title">{edu.title}</span>
              <div className="edu-details">
                <span className="date">
                  <FaCalendarAlt className="icon" /> {edu.date}
                </span>
                <span className="location">
                  <FaLocationDot className="icon" /> {edu.location}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="languages">
        <h3>{text[language].languagesTitle}</h3>
        <ul>
          {text[language].languages.map((lang, index) => (
            <li key={index}>{lang}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Resume;
