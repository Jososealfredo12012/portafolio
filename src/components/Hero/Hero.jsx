import React from 'react';
import { getImageUrl } from '../../assets/utils';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Jose</h1>
        <p className={styles.description}>
          Computer Science student at APEC with a strong foundation in
          cybersecurity and a growing passion for front-end development.
          Proficient in HTML, CSS, JavaScript, and React. Actively building
          projects to strengthen my skills and transition fully into web
          development. I also have hands-on experience with computer hardware
          assembling, maintaining, and troubleshooting systems which adds to my
          problem-solving mindset and technical versatility.
        </p>
        <a
          href='mailto:josealfredo.066@gmail.com'
          className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl('hero/heroImg.png')}
        alt='hero Image of me'
        className={styles.heroImg}
      />
      <div className={styles.topBlur}></div>
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
