import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <main className={styles.hero} id="footer">
      <nav className={styles.navigation}>
        <ul>
          <li>
            <a href="#about">Sobre mí</a>
          </li>
          <li>
            <a href="#proyects">Proyectos</a>
          </li>
          <li>
            <a href="#skills">Habilidades</a>
          </li>
        </ul>
      </nav>
      <p>© 2024 Mauricio Martinez</p>
    </main>
  );
};
