import React from 'react';
import { getImageUrl } from '../../assets/utils';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Jose</h1>
        <p className={styles.description}>breve decripcion Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi distinctio perferendis numquam labore, rem quaerat.</p>
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
