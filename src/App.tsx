import "./App.css";
import HomePage from "./views/HomePage/HomePage";
import Certifications from "./views/Certifications/Certifications";
import NavBar from "./views/NavBar/NavBar";
import { useEffect, useState } from "react";
import { useLocation, BrowserRouter as Router } from "react-router-dom";
import About from "./views/About/About";
import Projects from "./views/Projects/Projects";
import Social from "./assets/MenuSocial/MenuSocial";
import Contact from "./views/Contact/Contact";
import Error from "./views/Error/Error";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (windowWidth <= 1024) {
    return <Error />;
  }

  return (
    <Router>
      <MiApp />
    </Router>
  );
}

function MiApp() {
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const section1 = document.getElementById('section1');
      const section2 = document.getElementById('section2');
      const section3 = document.getElementById('section3');
      const section4 = document.getElementById('section4');
      const section5 = document.getElementById('section5');

      if (section1 && scrollPosition < section1.offsetTop) {
        window.history.replaceState(null, `${null}`, '/Home');
      } else if (section2 && scrollPosition < section2.offsetTop) {
        window.history.replaceState(null, `${null}`, '/About_me');
      } else if (section3 && scrollPosition < section3.offsetTop) {
        window.history.replaceState(null, `${null}`, '/Projects');
      } else if (section4 && scrollPosition < section4.offsetTop) {
        window.history.replaceState(null, `${null}`, '/Certifications');
      } else if (section5) {
        window.history.replaceState(null, `${null}`, '/Contact_me');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  useEffect(() => {
    const element = document.getElementById(location.hash.replace("#", ""));

    if (element) {
      window.scrollTo({
        behavior: "smooth",
        top: element.offsetTop,
      });
    }
    console.log(window.scrollY);

  }, [location]);
  return (
    <div>
      <NavBar />
      <Social />
      <div id="section1">
        <HomePage />
      </div>
      <div id="section2">
        <About />
      </div>
      <div id="section3">
        <Projects />
      </div>
      <div id="section4">
        <Certifications />
      </div>
      <div id="section5">
        <Contact />
      </div>
    </div>
  );
}

export default App;
