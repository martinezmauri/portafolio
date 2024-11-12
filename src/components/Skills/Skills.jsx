import React from "react";
import styles from "./Skills.module.css";
export const Skills = () => {
  return (
    <main className={styles.hero} id="skills">
      <h1 className={styles.title}>Habilidades.</h1>
      <section className={styles.skills}>
        <ul className={styles.listSkill}>
          <li>
            <img
              src="src\assets\html-logo.png"
              alt="html logo"
              className={styles.logo}
            />
          </li>
          <li>
            <img
              src="src\assets\css-logo.png"
              alt="css logo"
              className={styles.logo}
            />
          </li>
          <li>
            <img
              src="src\assets\javascript-logo.png"
              alt="javascript logo"
              className={styles.logo}
            />
          </li>
          <li>
            <img
              src="src\assets\typescript-logo.png"
              alt="typescript logo"
              className={styles.logo}
            />
          </li>
          <li>
            <img
              src="src\assets\react-logo.png"
              alt="react logo"
              className={styles.logo}
            />
          </li>
          {/* <li>
            <img
              src="src\assets\bootstrap-logo.png"
              alt="boostrap logo"
              className={styles.logo}
            />
          </li> */}
          <li>
            <img
              src="src\assets\nodejs-logo.png"
              alt="nodejs logo"
              className={styles.logo}
            />
          </li>
          <li>
            <img
              src="src\assets\postgresql-logo.png"
              alt="postgresql logo"
              className={styles.logo}
            />
          </li>
          <li>
            <img
              src="src\assets\mongodb-logo.png"
              alt="mongodb logo"
              className={styles.logo}
            />
          </li>
          <li>
            <img
              src="src\assets\nestjs-logo.png"
              alt="nestjs logo"
              className={styles.logo}
            />
          </li>
          <li>
            <img
              src="src\assets\express-logo.png"
              alt="express logo"
              className={styles.logo}
            />
          </li>
          <li>
            <img
              src="src\assets\redux-logo.png"
              alt="redux logo"
              className={styles.logo}
            />
          </li>
          <li>
            <img
              src="src\assets\jest-logo.png"
              alt="jest logo"
              className={styles.logo}
            />
          </li>
          <li>
            <img
              src="src\assets\github-logo.png"
              alt="github logo"
              className={styles.logo}
            />
          </li>
          <li>
            <img
              src="src\assets\git-logo.png"
              alt="git logo"
              className={styles.logo}
            />
          </li>
          <li>
            <img
              src="src\assets\docker-logo.png"
              alt="docker logo"
              className={styles.logo}
            />
          </li>
          {/* <li>
            <img
              src="src\assets\aws-logo.png"
              alt="aws logo"
              className={styles.logo}
            />
          </li> */}
        </ul>
      </section>
    </main>
  );
};
