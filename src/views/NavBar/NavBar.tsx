import { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import { Link, animateScroll as scroll } from "react-scroll";

function NavBar() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  const [isScrolled, setIsScrolled] = useState(false);
  const [changeColor, setChangeColor] = useState(false);
  const checkScroll = () => {
    if (window.scrollY >= 40) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    if (window.scrollY >= 650 && window.scrollY <= 1535 || window.scrollY >= 2328 && window.scrollY <= 2793) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  return (
    <div className={styles.content}>
      <nav className={styles.navbar} id={isScrolled ? (!changeColor ? styles.scrolled : styles.color) : ''}>
        <ul className={styles.ul} id={changeColor ? styles.change : ''}>
          <li>
            <Link
              onClick={scrollToTop}
              to=" "
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              About me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              Certifications
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section5"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >
              Contact me
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
