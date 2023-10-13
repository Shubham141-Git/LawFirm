import React from "react";
import styles from "./Introduce.module.css";

const Introduce = () => {
  return (
    <div className={styles.introduce}>
      <div className={styles.section1}>
        <p>Lets Introduce </p>
        <p>Ourself</p>
      </div>

      <div className={styles.seperator}></div>

      <div className={styles.section2}>
        <span>Criminal law</span>
        <p>
          Amet minim mollit non deserunt ullamco est
          <p></p>sit aliqua dolor do amet sint. Velit officia consequatduis
        </p>
        <p>velit mollit Exercitation.</p>
      </div>
    </div>
  );
};

export default Introduce;
