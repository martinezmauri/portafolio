import React from "react";
import styles from "./AboutMe.module.css";
import { Download } from "lucide-react";

export const AboutMe = () => {
  return (
    <main className={styles.hero} id="about">
      <aside className={styles.containerPhoto}>
        <img
          src="https://res.cloudinary.com/dqae811zz/image/upload/v1731422710/ysq1wbmqlxdi76dzlysb.jpg"
          alt="foto de perfil"
          className={styles.photo}
        />
      </aside>
      <article className={styles.desc}>
        <h1>Mauricio Martinez.</h1>
        <section>
          <p>
            <strong>
              ¡Hola! Soy Mauricio, desarrollador web de Mendoza, Argentina.
            </strong>
            <br />
            Me apasiona la programación y disfruto construir soluciones desde el
            backend hasta el frontend. Tengo experiencia trabajando con
            tecnologías como NestJS, TypeScript, PostgreSQL, React y Next.js,
            entre otras. He participado en proyectos fullstack, desarrollando y
            documentando APIs, así como también creando interfaces funcionales y
            atractivas. Mi formación incluye estudios en la UTN, un bootcamp
            intensivo y un fuerte enfoque autodidacta, lo que me permite
            aprender constantemente y adaptarme a nuevos desafíos. Actualmente,
            busco una oportunidad para seguir creciendo como desarrollador y
            aportar valor en un equipo de trabajo.
          </p>
        </section>
        <section className={styles.butons}>
          <a
            href="https://www.linkedin.com/in/mauricio-martinez11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dqae811zz/image/upload/v1731424079/o4e6e9icvk14blgtxw70.png"
              alt="logo de linkedin"
              className={styles.logo}
            />
          </a>
          <a
            href="https://github.com/martinezmauri"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://res.cloudinary.com/dqae811zz/image/upload/v1731424079/nk7bxov0ojmzeiauy8ek.png"
              alt="logo de github"
              className={styles.logo}
            />
          </a>
          <a
            href="https://res.cloudinary.com/dqae811zz/image/upload/v1734475379/w1koxb97titymckd2egq.pdf"
            className={styles.buttonCV}
            target="_blank"
          >
            <span className={styles.cvDesktop}>CV</span>
            <span className={styles.cvMobile}>Hoja de vida</span>
            <Download />
          </a>
        </section>
      </article>
    </main>
  );
};
