import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { Link, Element } from 'react-scroll'


function App() {
  const [resumeData, setResumeData] = useState(new Map());
  const [sharedData, setSharedData] = useState(new Map());
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    loadSharedData();
    var resumePath = `res_primaryLanguage.json`;
    loadResumeFromPath(resumePath);
    return () => {
    }
  }, []);

  const loadResumeFromPath = (path) => {
    fetch(path)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setResumeData(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }

  const loadSharedData = () => {
    fetch(`portfolio_shared_data.json`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setSharedData(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }

  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let x = ["navigation-wrapper"];
  if (scrolled) {
    x.push("scrolled");
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {

    return (
      <div>
        <nav className={x.join(" ")}>
          <div className="navigation-wrapper nav navbar-nav">
            <Link activeClass="active" className="navigation-link about" to="about" spy={true} smooth={true} duration={500} >About</Link>
            <Link activeClass="active" className="navigation-link projects" to="projects" spy={true} smooth={true} duration={500}>Projects</Link>
            <Link activeClass="active" className="navigation-link skills" to="skills" spy={true} smooth={true} duration={500} >Skills</Link>
            <Link activeClass="active" className="navigation-link experience" to="experience" spy={true} smooth={true} duration={500}>Experience</Link>
          </div>
        </nav>
        <Header sharedData={sharedData.basic_info} />
        <div className="col-md-12 mx-auto text-center language">
          <div
            style={{ display: "inline" }}
          >
            <span
              className="iconify language-icon mr-5"
              data-icon="twemoji-flag-for-flag-united-kingdom"
              data-inline="false"
              id={window.$primaryLanguageIconId}
              display="none"
            ></span>
          </div>
          <div
            style={{ display: "inline" }}
          >
            <span
              className="iconify language-icon"
              data-icon="twemoji-flag-for-flag-poland"
              data-inline="false"
              id={window.$secondaryLanguageIconId}
              display="none"
            ></span>
          </div>
        </div>
        <About
          name="about"
          resumeBasicInfo={resumeData.basic_info}
          sharedBasicInfo={sharedData.basic_info}
        />
        <Element name="projects" className="element" >
          <Projects
            resumeProjects={resumeData.projects}
            resumeBasicInfo={resumeData.basic_info}
          />
        </Element>
        <Skills
          name="skills"
          sharedSkills={sharedData.skills}
          resumeBasicInfo={resumeData.basic_info}
        />
        <Element name="experience" className="element" >
          <Experience
            resumeExperience={resumeData.experience}
            resumeBasicInfo={resumeData.basic_info}
          />
        </Element>
        <Footer
          name="links"
          sharedBasicInfo={sharedData.basic_info}
        />
      </div >
    );
  }

}

export default App;
