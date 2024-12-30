import React from "react";

import styles from "./Education.module.css";
import education from "../../data/education.json";
import { getImageUrl } from "../../utils";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>
      <div className={styles.content}>
        <ul className={styles.history}>
          {education.map((edu, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(edu.imageSrc)}
                  alt={`${edu.institution} logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{edu.institution}</h3>
                  <p>{edu.program}</p>
                  <p>{`${edu.startDate} - ${edu.endDate}`}</p>
                  <ul>
                    {edu.activities.map((activity, id) => (
                      <li key={id}>{activity}</li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
