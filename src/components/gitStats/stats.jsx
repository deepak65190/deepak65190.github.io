import React from "react";
import styles from "./stats.module.css";
const Stats = () => {
  return (
    <div>
      <div className={styles.status}>
        <a href="https://github.com/deepak65190">
          <img
            className={styles.gitstreakImg}
            src="https://github-readme-streak-stats.herokuapp.com/?user=deepak65190&theme=tokyonight"
            alt="deepak65190"
          />
        </a>
      </div>
      <div className={styles.streak}>
        <div>
          <a href="https://github.com/deepak65190">
            <img
              className={styles.gitstreakImg}
              src="https://github-readme-stats.vercel.app/api?username=deepak65190&show_icons=true&locale=en&theme=tokyonight"
              alt="deepak65190"
            />
          </a>
        </div>
        <div>
          <a href="https://github.com/deepak65190">
            <img
              className={styles.gitstreakImg}
              src="https://github-readme-stats.vercel.app/api/top-langs?username=deepak65190&show_icons=true&locale=en&layout=compact&theme=tokyonight"
              alt="deepak65190"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Stats;
{
  /* <div style={{ width: "40%", margin: "auto" }}>
        <p>
         
        </p>
      </div>

      <div
        style={{
          width: "60%",
          height: "300px",
          display: "flex",
          margin: "auto",
        }}
      >
        <p>
          &nbsp;
          
        </p>
        
      </div> */
}
