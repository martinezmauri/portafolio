import React from "react";
import styles from "./Proyects.module.css";
import data from "../../helpers/Proyects.json";

export const Proyects = () => {
  return (
    <main className={styles.hero} id="proyects">
      <h1 className={styles.title}>Proyectos.</h1>
      <article className={styles.containerCards}>
        {data.map((value) => (
          <section className={styles.card}>
            <div className={styles.containerImg}>
              <img
                src={value.imgProyect}
                alt="Imagen del proyecto"
                className={styles.imgCard}
              />
            </div>
            <time datetime="2024" className={styles.dateCard}>
              {value.time}
            </time>
            <h1 className={styles.titleCard}>{value.title}</h1>
            <p className={`${styles.descCard} ${styles.descDesktop}`}>
              {value.description}
            </p>
            <p className={`${styles.descCard} ${styles.descMobile}`}>
              {value.shortDescription}
            </p>
            <div className={styles.redirectContainer}>
              <a
                href={value.urlRepository}
                target="_blank"
                className={styles.redirect}
              >
                Repositorio
              </a>
              {value.urlDeploy && (
                <a
                  href={value.urlDeploy}
                  target="_blank"
                  className={styles.redirect}
                >
                  Visitar Sitio
                </a>
              )}
            </div>
          </section>
        ))}
      </article>
    </main>
  );
};
