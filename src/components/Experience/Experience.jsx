import React from 'react';

import styles from './Experience.module.css';
import skills from '../../data/skills.json';
import { getImageUrl } from '../../assets/utils';

export const Experience = () => {
  return (
    <section id='experience' className={styles.container}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skill}>
                  <img
                    src={getImageUrl(skill.imageSrc)}
                    alt={skill.title}
                    className={styles.skillImg}
                  />
                  <p>{skill.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
