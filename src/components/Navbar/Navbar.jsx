import React from "react";

import styles from "./Navbar.module.css";
import { Darkmode } from "../Darkmode/Darkmode";

export const Navbar = () => {
  const handleClick = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClickMenu = () => {
    const menu = document.querySelector(`.${styles.hero}`);
    menu.classList.toggle(styles.active);
  };

  return (
    <nav id="navbar" className={styles.hero}>
      <div>
        <a href="#" className={styles.logo}>
          mM
        </a>
      </div>
      <div className={styles.menuToggle} onClick={handleClickMenu}>
        ☰
      </div>
      <div className={styles.container}>
        <ul className={styles.navbar}>
          <li className={styles.itemNavbar}>
            <a href="#about" onClick={(event) => handleClick(event, "about")}>
              Sobre mí
            </a>
          </li>
          <li className={styles.itemNavbar}>
            <a
              href="#proyects"
              onClick={(event) => handleClick(event, "proyects")}
            >
              Proyectos
            </a>
          </li>
          <li className={styles.itemNavbar}>
            <a href="#skills" onClick={(event) => handleClick(event, "skills")}>
              Habilidades
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.darkmodeHero}>
        <Darkmode />
      </div>
    </nav>
  );
};
