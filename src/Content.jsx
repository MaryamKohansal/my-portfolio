import profilePic from "./assets/photo.JPG";
import { useEffect } from "react";

function Content({ language }) {
  useEffect(() => {
    document.body.classList.add("home-page");
  }, []);

  const txt = {
    en: {
      p1: `Hi, I'm Maryam, a Bachelor's graduate in Computer Science from RPTU Kaiserslautern and currently a Master's student in Computer Science at Hochschule Kaiserslautern, Campus Zweibrücken. I have a strong passion for software development and web technologies, with a particular focus on building clean, practical applications using React and modern frontend tools. I enjoy exploring new programming languages and applying them in real-world projects, constantly challenging myself to learn and grow.`,

      p2: `Alongside my technical skills, I bring strong soft skills in teamwork, problem-solving, analytical thinking, communication, and self-organization, which help me collaborate effectively and tackle complex tasks. Outside of my work, I love hiking, swimming, traveling, and learning new languages, as these activities keep me curious and inspired.`,

      p3: `I'm motivated, adaptable, and always eager to contribute to meaningful projects while expanding my knowledge in technology.`,
    },

    de: {
      p1: `Hallo, ich bin Maryam, Absolventin des Bachelorstudiums Informatik an der RPTU Kaiserslautern und derzeit Masterstudentin der Informatik an der Hochschule Kaiserslautern, Campus Zweibrücken. Ich habe eine große Leidenschaft für Softwareentwicklung und Webtechnologien, mit besonderem Fokus auf die Entwicklung sauberer und praxisorientierter Anwendungen mit React und modernen Frontend-Tools. Es macht mir Freude, neue Programmiersprachen zu entdecken und sie in realen Projekten anzuwenden und mich dabei ständig weiterzuentwickeln.`,

      p2: `Neben meinen technischen Fähigkeiten bringe ich ausgeprägte Soft Skills wie Teamfähigkeit, Problemlösungskompetenz, analytisches Denken, Kommunikationsfähigkeit und Selbstorganisation mit. Diese helfen mir, effektiv im Team zu arbeiten und auch komplexe Aufgaben erfolgreich zu bewältigen. In meiner Freizeit gehe ich gerne wandern und schwimmen, reise viel und lerne neue Sprachen.`,

      p3: `Ich bin motiviert, anpassungsfähig und stets daran interessiert, an sinnvollen Projekten mitzuwirken und gleichzeitig mein Wissen im Bereich der Technologie weiter auszubauen.`,
    },
  };

  return (
    <div className="content">
      <div className="photo-container">
        <div className="photo-wrapper">
          <img className="photo" src={profilePic} alt="profile-photo" />
          <div className="photo-blur"></div>
        </div>
        <h3 className="title">Maryam Kohansal</h3>
      </div>
      <div className="text">
        <p>{txt[language].p1}</p>
        <p>{txt[language].p2}</p>
        <p>{txt[language].p3}</p>
      </div>
    </div>
  );
}

export default Content;
