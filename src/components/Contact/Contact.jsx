import React from 'react';
import { getImageUrl } from '../../assets/utils';
import styles from './Contact.module.css';

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl('contact/emailicon.png')} alt='Email Icon' />
          <a href='mailto:josealfredo.066@gmail.com'>
            josealfredo.066@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl('contact/linkedinicon.png')} alt='Linkedin Icon'  />
          <a href='https://www.linkedin.com/in/jose-hern%C3%A1ndez-reyes-a62627278/' target='_blank'>
            linkedin.com/Jose-Hernandez
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl('contact/githubicon.png')} alt='Email Icon' />
          <a href='https://github.com/Jososealfredo12012' target='_blank'>
            github.com/jose-hernandez
          </a>
        </li>
      </ul>
    </footer>
  );
};
