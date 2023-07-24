'use client';
import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import banner2 from '../../assets/images/dogbanner.webp';
import banner3 from '../../assets/images/dobbanner1.webp';
import banner4 from '../../assets/images/banner3.png';
import styles from './hero.module.css';
import { Button } from 'react-bootstrap';

const Hero = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const handlePrev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + 3) % 3);
  };

  return (
    <>
      <div className={`${styles.heroContainer}`}>
        <Carousel
          className={`${styles.bannerContainer} `}
          activeIndex={index}
          onSelect={() => {}}
          nextIcon={
            <Button className={styles.next}>
              <FaArrowRight className={styles.nextArrow} onClick={handleNext} />
            </Button>
          }
          prevIcon={
            <Button className={styles.prev}>
              <FaArrowLeft className={styles.prevArrow} onClick={handlePrev} />
            </Button>
          }
        >
          <Carousel.Item>
            <Image
              src={banner3}
              alt="banner.png"
              className={`${styles.banner1} img img-fluid`}
              placeholder="blur"
            />

            <article className={styles.acticle}>
              <h2 className={`${styles.title}`}>
                We provide the best care to our furry friends!
              </h2>
              <p className={`${styles.para}`}>
                Top Quality of Pet Product Store.
              </p>
            </article>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src={banner2}
              alt="banner.png"
              className={`${styles.banner1} img img-fluid`}
              placeholder="blur"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Image
              src={banner4}
              alt="banner.png"
              className={`${styles.banner1} img img-fluid`}
              placeholder="blur"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Hero;
