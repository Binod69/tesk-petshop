'use client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './footer.module.css';
import Image from 'next/image';
import footer1 from '../../assets/images/footer1.png';
import footer2 from '../../assets/images/footer2.png';
import footer3 from '../../assets/images/footer3.png';
import footer4 from '../../assets/images/footer4.png';
const Footer = () => {
  return (
    <>
      <div className={styles.footerCon}>
        <Container>
          <Row>
            <Col sm={12} lg={3} className="my-lg-5 text-light">
              <h2 className={styles.logoTitle}>YOUR LOGO HERE</h2>
              <div>
                <span className={styles.logoPhone}>Phone Number:</span>
                <p className={styles.logoPhone}>+977-9861859764</p>
              </div>
              <div>
                <span className={styles.logoLocation}>Location:</span>
                <p className={styles.logoLocation}>Tahachal-Kathmandu</p>
              </div>
            </Col>
            <Col sm={12} lg={3} className="my-lg-5">
              <article>
                <p className={styles.desc}>
                  <q>
                    City Pet House & Animal Clinic: Quality and affordable
                    animal care at your doorstep. Comprehensive, professional,
                    and compassionate veterinary services by our dedicated and
                    experienced team.
                  </q>
                </p>
              </article>
            </Col>
            <Col sm={12} lg={3} className="text-light my-lg-5">
              <p className={styles.titleMenu}>Menu</p>
              <ul className={styles.menuList}>
                <li>Home</li>
                <li>About</li>
                <li>Service</li>
                <li>Breeds</li>
                <li>Shop</li>
                <li>Contact</li>
              </ul>
            </Col>
            <Col sm={12} lg={3} className="text-light my-lg-5">
              <p className={styles.galleryTitle}>Gallery</p>
              <Row lg={2} className="g-2 m-0 p-0">
                <Col>
                  <Image src={footer1} alt="footer.png" />
                </Col>
                <Col>
                  <Image src={footer2} alt="footer.png" />
                </Col>
                <Col>
                  <Image src={footer3} alt="footer.png" />
                </Col>
                <Col>
                  <Image src={footer4} alt="footer.png" />
                </Col>
              </Row>
            </Col>
          </Row>
          <hr className="text-light" />
        </Container>
      </div>
    </>
  );
};

export default Footer;
