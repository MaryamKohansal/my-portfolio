import Header from "./Header.jsx";
import Content from "./Content.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";
import Resume from "./Resume.jsx";
import Projects from "./Projects.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <BrowserRouter>
      <div className="app">
        <Header language={language} setLanguage={setLanguage} />
        
          <Routes>
            <Route path="/" element={<Content language={language} />} />
            <Route path="/contact" element={<Contact language={language} />} />
            <Route path="/resume" element={<Resume language={language} />} />
            <Route path="/projects" element={<Projects language={language} />} />
          </Routes>
        
        <Footer language={language} />
      </div>
    </BrowserRouter>
  );
}

export default App;
