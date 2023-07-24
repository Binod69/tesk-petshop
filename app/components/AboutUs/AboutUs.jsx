'use client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import group from '../../assets/images/Group.png';
import Image from 'next/image';
import list from '../../assets/images/list.svg';
import styles from './aboutus.module.css';
import Btn from '../ui/Btn';

const AboutUs = () => {
  return (
    <>
      <Container>
        <Row className={styles.aboutContainer}>
          <Col sm={12} md={12} lg={6}>
            <Image
              src={group}
              alt="group.png"
              placeholder="blur"
              quality={100}
              width={500}
              height={500}
              className="img img-fluid"
            />
          </Col>
          <Col
            sm={12}
            md={12}
            lg={6}
            className=" d-lg-flex flex-lg-row justify-content-lg-between align-items-lg-center "
          >
            <article className="my-5 my-lg-0">
              <h3 className={styles.title}>About Us</h3>
              <p className={`${styles.para} text-sm-start`}>
                Pet House & Animal clinic was established with moto to provide
                qualitative and affordable animal healthcare service to your
                doorstep.
              </p>
              <div className={`${styles.list}`}>
                <p>
                  <Image src={list} alt="list.png" /> Comprehensive
                </p>
                <p>
                  <Image src={list} alt="list.png" /> Comprehensive
                </p>
                <p>
                  <Image src={list} alt="list.png" /> Comprehensive
                </p>
              </div>
              <Btn title={'contact'} />
            </article>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutUs;
