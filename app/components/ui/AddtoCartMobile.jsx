'use client';
import { BsCartFill } from 'react-icons/bs';
import styles from './addtocartmobile.module.css';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const AddtoCartMobile = () => {
  return (
    <>
      <button className={styles.button}>
        <div className={styles.iconContainer}>
          <BsCartFill className={styles.buttonIcon} />
          <Badge className={styles.badge}>2</Badge>
        </div>
      </button>
    </>
  );
};

export default AddtoCartMobile;
