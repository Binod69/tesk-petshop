'use client';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import styles from './footer.module.css';
import footer1 from '../../assets/images/footer1.png';
import footer2 from '../../assets/images/footer2.png';
import footer3 from '../../assets/images/footer3.png';
import footer4 from '../../assets/images/footer4.png';
import socialMedia from '../../assets/images/socialMedia.svg';
const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <>
      <div className={styles.footerCon}>
        <Container>
          <Row>
            <Col sm={12} lg={3} className="mt-5 my-lg-5 text-light">
              <h2 className={styles.logoTitle}>YOUR LOGO HERE</h2>
              <div className={styles.contactCon}>
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
              <p className={`${styles.titleMenu} d-none d-lg-block`}>Menu</p>
              <ul className={`${styles.menuList} d-none d-lg-block`}>
                <li className="my-2">Home</li>
                <li className="my-2">About</li>
                <li className="my-2">Service</li>
                <li className="my-2">Breeds</li>
                <li className="my-2">Shop</li>
                <li>Contact</li>
              </ul>
              <Accordion className={`${styles.accordion} d-lg-none`}>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Menu</Accordion.Header>
                  <Accordion.Body>
                    <ul className={styles.menuList}>
                      <li>Home</li>
                      <li>About</li>
                      <li>Service</li>
                      <li>Breeds</li>
                      <li>Shop</li>
                      <li>Contact</li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col sm={12} lg={3} className="text-light my-lg-5">
              <p className={`${styles.galleryTitle} d-none d-lg-block`}>
                Gallery
              </p>
              <Row sm={12} lg={2} className="g-2 m-0 p-0 d-none d-lg-flex">
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
              <Accordion className="my-3 d-block d-lg-none">
                <Accordion.Item eventKey="0">
                  <Accordion.Header> Gallery</Accordion.Header>
                  <Accordion.Body>
                    <Row sm={12} lg={2} className="g-2 m-0 p-0">
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
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
          <hr className="text-light" />
          <Row>
            <Col md={6} lg={9}>
              <p className={styles.footerDesc}>
                Copyright © {date} City Pet House & Animal Clinic | All Rights
                Reserved
              </p>
            </Col>
            <Col md={6} lg={3}>
              <Image src={socialMedia} alt="socialmedia.svg" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
