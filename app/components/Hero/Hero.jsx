'use client';
import Image from 'next/image';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner2 from '../../assets/images/dogbanner 2.jpg';
import banner3 from '../../assets/images/dobbanner1.webp';
import styles from './hero.module.css';
const Hero = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <div className={`${styles.heroContainer}`}>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item className={styles.bannerContainer}>
            <Image
              src={banner3}
              alt="banner.png"
              className={`${styles.banner1} img img-fluid`}
              placeholder="blur"
            />

            {/* <Carousel.Caption>
                <h3 className={`${styles.title}`}>
                  We provide the best care to our furry friends!
                </h3>
                <p className={`${styles.para}`}>
                  Top Quality of Pet Product Store
                </p>
              </Carousel.Caption> */}

            <article className={styles.acticle}>
              <h2 className={`${styles.title}`}>
                We provide the best care to our furry friends!
              </h2>
              <p className={`${styles.para}`}>
                Top Quality of Pet Product Store.
              </p>
            </article>
          </Carousel.Item>
          {/* <Carousel.Item>
            <Image
              src={banner2}
              alt="banner.png"
              className="img img-fluid"
              placeholder="blur"
            />
          </Carousel.Item> */}
        </Carousel>
        <figure></figure>
        <figure></figure>
      </div>
    </>
  );
};

export default Hero;
