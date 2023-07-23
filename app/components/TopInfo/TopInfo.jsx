'use client';
import Container from 'react-bootstrap/Container';
import styles from './topinfo.module.css';

const TopInfo = () => {
  return (
    <>
      <Container fluid className={`${styles.infoContainer}`}>
        <article className="text-center">
          <p className={styles.title}>
            Call us for Veterinary Support: +977-9861859764
          </p>
        </article>
      </Container>
    </>
  );
};

export default TopInfo;
