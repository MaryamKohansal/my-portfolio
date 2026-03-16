import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import bgImage from "./assets/contact-bg.jpg";

function Contact({ language }) {
  return (
    <div className="contact-page">
      {/* Background image layer */}
      <div
        className="contact-bg"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      <h1 className="contact-title">
        {language === "en" ? "Reach Me" : "Kontakt"}
      </h1>

      <div className="contact-item">
        <MdEmail className="contact-icon" />
        <a href="mailto:kohansal.p86@gmail.com">kohansal.p86@gmail.com</a>
      </div>

      <div className="contact-item">
        <FaGithub className="contact-icon" />
        <a href="https://github.com/MaryamKohansal">
          github.com/MaryamKohansal
        </a>
      </div>

      <div className="contact-item">
        <FaLinkedin className="contact-icon" />
        <a
          href="https://www.linkedin.com/in/maryam-kohansal-b37646178/"
          target="_blank"
        >
          https://www.linkedin.com/in/maryam-kohansal-b37646178/
        </a>
      </div>

      <div className="contact-item">
        <FaLocationDot className="contact-icon" />
        <span>Kaiserslautern, Germany</span>
      </div>
    </div>
  );
}

export default Contact;
