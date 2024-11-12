import React from "react";
import styles from "./AboutMe.module.css";

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
            ¡Hola! Soy Mauricio, desarrollador web de Mendoza, Argentina. Me
            apasiona el desarrollo backend y tengo experiencia trabajando con
            tecnologías como NestJS, TypeScript, PostgreSQL, Express, MongoDB,
            Node.js, Docker y despliegue de aplicaciones. He construido y
            documentado APIs, como un ecommerce que incluyo en mi portafolio, y
            disfruto resolver problemas complejos a través del código. Mi
            formación en la Universidad Tecnológica Nacional, junto con estudios
            autodidactas y un bootcamp, me ha permitido trabajar en proyectos
            fullstack y fortalecer mis habilidades en frontend con tecnologías
            como HTML, CSS, React, Next.js y Redux. Además, me gusta aprender de
            manera constante para mejorar mis habilidades y adaptarme a las
            últimas tendencias tecnológicas. Actualmente, estoy en busca de una
            oportunidad para contribuir en un equipo como desarrollador, donde
            pueda seguir creciendo y aportar mis conocimientos.
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
        </section>
      </article>
    </main>
  );
};
