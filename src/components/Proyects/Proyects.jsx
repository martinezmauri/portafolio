import React from "react";
import styles from "./Proyects.module.css";

export const Proyects = () => {
  return (
    <main className={styles.hero} id="proyects">
      <h1 className={styles.title}>Proyectos.</h1>
      <article className={styles.containerCards}>
        <div className={styles.flipContainer}>
          <section className={`${styles.card} ${styles.frontCard}`}>
            <h3 className={styles.titleCard}>DevNavigator</h3>
            <h3 className={styles.subtitleCard}>
              Plataforma de Aprendizaje IT
            </h3>
            <p className={styles.descCard}>
              DevNavigator es una plataforma web diseñada para apoyar a los
              usuarios en su recorrido de aprendizaje en el mundo IT. La
              aplicación ofrece cursos pagos con diversos tipos de materiales
              educativos y ejercicios prácticos. Los usuarios pueden acceder a
              los cursos a través de una autenticación interna o mediante
              autenticación externa (con integración de proveedores como
              Google). Además, implementamos una pasarela de pago utilizando
              Mercado Pago para gestionar las transacciones de manera segura.
            </p>
          </section>
          <section className={`${styles.card} ${styles.backCard}`}>
            <h3 className={styles.titleCard}>Rol y Contribuciones</h3>
            <p className={styles.descCard}>
              En este proyecto grupal, mi rol principal fue en el backend, donde
              desarrollé funcionalidades clave como la autenticación de usuarios
              basada en roles y asegurada con JWT (JSON Web Tokens). También
              trabajé en las operaciones para la gestión de usuarios y cursos.
              Implementé validaciones para mantener la integridad de los datos
              mediante herramientas de NestJS. A pesar de que mi enfoque
              principal fue el backend, también colaboré en el frontend,
              específicamente en la integración de Mercado Pago y la
              autenticación de terceros. Además, realicé el deploy de la
              aplicación, garantizando que estuviera disponible y estable para
              su uso. Esta experiencia me permitió no solo mejorar mis
              habilidades técnicas, sino también fortalecer el trabajo en equipo
              y la comunicación en proyectos colaborativos.
            </p>
            <div className={styles.buttonCard}>
              <a
                href="https://dev-navigator-frontend-lkc95d0n3.vercel.app/"
                target="_blank"
              >
                Ver
              </a>
              <div className={styles.imageButton}>
                <a
                  className={styles.buttonGithub}
                  href="https://github.com/DevNavigator/DevNavigatorProject"
                  target="_blank"
                >
                  <img
                    src="https://res.cloudinary.com/dqae811zz/image/upload/v1731424079/nk7bxov0ojmzeiauy8ek.png"
                    alt="github-logo"
                  />
                </a>
              </div>
            </div>
          </section>
        </div>
        <div className={styles.flipContainer}>
          <section className={`${styles.card} ${styles.frontCard}`}>
            <h3 className={styles.titleCard}>API de Ecommerce</h3>
            <p className={styles.descCard}>
              Este proyecto es una API de Ecommerce desarrollada con NestJS y
              escrita en TypeScript. Su objetivo principal es proporcionar una
              plataforma backend robusta y segura que gestione autenticación,
              compras, y manejo de usuarios, mientras consolida conocimientos de
              desarrollo backend. Tambien cuenta con un sistema de pruebas
              exhautivo mediante pruebas unitarias y pruebas end-to-end.
            </p>
          </section>
          <section className={`${styles.card} ${styles.backCard}`}>
            <h3 className={styles.titleCard}>Rol y Contribuciones</h3>
            <p className={styles.descCard}>
              Este proyecto fue desarrollado de manera individual con el
              objetivo de fortalecer mis habilidades en backend utilizando
              NestJS. En él, implementé autenticación basada en roles con JWT,
              documenté la API con Swagger, y manejé almacenamiento de imágenes
              mediante Cloudinary. Usé Docker para la contenedorización y Render
              con GitHub Actions para el despliegue continuo. La base de datos
              PostgreSQL se gestionó con TypeORM, configurando migraciones para
              el manejo estructurado de datos. Además, desarrollé pruebas
              unitarias y de integración con Jest para asegurar la funcionalidad
              y estabilidad de cada módulo. Este proyecto me permitió consolidar
              conceptos clave de backend y manejo de APIs.
            </p>
            <div className={styles.buttonCard}>
              <a
                href="https://ecommerce-latest-xfvg.onrender.com/api"
                target="_blank"
              >
                Ver
              </a>
              <div className={styles.imageButton}>
                <a
                  className={styles.buttonGithub}
                  href="https://github.com/martinezmauri/EcommerceAPI"
                  target="_blank"
                >
                  <img
                    src="https://res.cloudinary.com/dqae811zz/image/upload/v1731424079/nk7bxov0ojmzeiauy8ek.png"
                    alt="github-logo"
                  />
                </a>
              </div>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
};
