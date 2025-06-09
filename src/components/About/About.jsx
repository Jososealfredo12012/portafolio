import React from 'react';

import styles from './About.module.css'
import { getImageUrl } from '../../assets/utils';

export const About = () => {
  return (
    <section className={styles.container} id='about'>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem} >
            <img src={getImageUrl('img/about/cursorIcon.png')} alt='cursor icon'/>
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Frontend developer with expirience in building responsive and
                optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl('img/about/serverIcon.png')} alt='server icon' />
            <div className={styles.aboutItemText}>
              <h3>Cybersecurity Technologist</h3>
              <p>
                Computer Science student at APEC with a strong foundation in
                cybersecurity, backed by a degree in Cybersecurity Technology
                from ITLA.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
