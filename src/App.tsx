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
import toastr from 'toastr'
import Error from "./views/Error/Error";

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (windowWidth <= 1024) {
    return (
      <Error/>
    )
  }

  return (
    <Router>
      <MiApp />
    </Router>
  );
}

function MiApp() {

  toastr.options = {
    "closeButton": true,
    "debug": true,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-full-width",
    "preventDuplicates": true,
    "showDuration": 300,
    "hideDuration": 1000,
    "timeOut": 2000,
    "extendedTimeOut": 1000,
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }
  const location = useLocation();

  useEffect(() => {
    const element = document.getElementById(location.hash.replace("#", ""));

    if (element) {
      window.scrollTo({
        behavior: "smooth",
        top: element.offsetTop,
      });
    }
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
        <Contact/>

      </div>
    </div>
  );
}

export default App;
