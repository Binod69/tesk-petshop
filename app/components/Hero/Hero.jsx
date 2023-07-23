'use client';
import Image from 'next/image';
import styles from './hero.module.css';
const Hero = () => {
  return (
    <>
      <div className={styles.heroContainer}>
        <article>
          <h2 className={`${styles.title}`}>
            We provide the best care to our furry friends!
          </h2>
          <p className={`${styles.para}`}>Top Quality of Pet Product Store.</p>
        </article>
      </div>
    </>
  );
};

export default Hero;
