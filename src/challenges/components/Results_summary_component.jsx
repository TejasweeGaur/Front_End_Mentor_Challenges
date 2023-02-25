/** @format */

import React from "react";
import styles from "../css/Results_summary_component.module.css";
import data from "../../assets/data/data.json";
import { v4 as uuidv4 } from "uuid";

const Results_summary_component = () => {
  return (
    <div className={styles.container}>
      <div className={styles.masterComponent}>
        <div className={styles.yourResultCard}>
          <div className={styles.yourResult}>Your Result</div>
          <div className={styles.scoreCard}>
            <div className={styles.marksScored}>76</div>
            <div className={styles.totalMarks}>of 100</div>
          </div>
          <div className={styles.description}>
            You scored higher than 65% of the people who have taken these tests.
          </div>
        </div>
        <div className={styles.summaryCardContainer}>
          <div className={styles.summaryContainer}>Summary</div>
          <div className={styles.marksContainer}>
            {data.map((element) => {
              return (
                <div
                  className={styles.marks}
                  key={uuidv4()}
                  style={{ background: element.background_color }}
                >
                  <div
                    className={styles.icon_title_pair}
                    style={{
                      color: element.text_color,
                    }}
                  >
                    <img
                      className={styles.icon}
                      src={element.icon}
                      alt={element.category}
                    />
                    <div className={styles.title}>{element.category}</div>
                  </div>
                  <div className={styles.score}>{element.score} / 100</div>
                </div>
              );
            })}
          </div>
          <div className={styles.continueContainer} type='submit'>
            Continue
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results_summary_component;
