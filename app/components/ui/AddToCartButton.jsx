'use client';
import { BsCartFill } from 'react-icons/bs';
import styles from './addtocartbutton.module.css';
const AddToCartButton = () => {
  return (
    <>
      <button className={`${styles.button}`}>
        <BsCartFill className={styles.buttonIcon} />
        <span className={styles.cartItems}> 2 items</span>
      </button>
    </>
  );
};

export default AddToCartButton;
