import Image from 'next/image';
import { AiOutlineRight } from 'react-icons/ai';
import btnicon from '../../assets/images/btn-circle.svg';
import styles from './btn.module.css';
const Btn = ({ title }) => {
  return (
    <>
      <button className={styles.btn}>
        {title}
        <span className={styles.iconContainer}>
          <Image src={btnicon} alt="btn-icon.svg" />
          <span>
            <AiOutlineRight className={styles.icon} />
          </span>
        </span>
      </button>
    </>
  );
};

export default Btn;
