'use client';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import btnicon from '../../assets/images/Ellipse 2.svg';
import { AiOutlineRight } from 'react-icons/ai';

import styles from './furyfriend.module.css';
const FindFurryFriends = () => {
  return (
    <>
      <Container className={styles.backCon}>
        <div className=" ms-lg-3">
          <div className="">
            <p className={styles.para}>One More Friend Thousands More Fun!</p>
          </div>
          <div>
            <h2 className={styles.title}>
              <q>Find your furry soulmate at Our Pet Shop.</q>
            </h2>
          </div>

          <div>
            <button className={styles.btn}>
              Get Now
              <span className={styles.iconContainer}>
                <Image src={btnicon} alt="btn-icon.svg" />
                <span>
                  <AiOutlineRight className={styles.icon} />
                </span>
              </span>
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default FindFurryFriends;
