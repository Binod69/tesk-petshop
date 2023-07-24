'use client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import petsData from './petsdata';
import styles from './petcollection.module.css';
import Btn from '../ui/Btn';
const PetCollection = () => {
  return (
    <Container>
      <div className={styles.petsContainer}></div>
      <Col className="text-center">
        <h2 className={styles.title}>Our Pet Collections</h2>
        <p className={styles.desc}>
          <q>
            Bring joy to your home with a furry companion from our pet
            selection.
          </q>
        </p>
      </Col>
      <Row xs={1} md={2} lg={4} className="g-4">
        {petsData &&
          petsData.map((pet, index) => (
            <Col key={index}>
              <Card className={styles.card}>
                <Card.Img
                  className={styles.cardImg}
                  variant="top"
                  src={pet.image}
                />
                <Card.Body>
                  <Card.Title className={styles.cardTitle}>
                    {pet.title}
                  </Card.Title>
                  <Card.Text>
                    <span className="me-3">
                      <span className={styles.cardGender}>Gender:</span>
                      <span className={styles.cardGenderName}>
                        {pet.gender}
                      </span>
                    </span>
                    <span>
                      <span className={styles.cardGender}>Age:</span>{' '}
                      <span className={styles.cardGenderName}>{pet.age}</span>
                    </span>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>
      <div className=" d-flex justify-content-center align-items-center my-5">
        <Btn title={'View All'} />
      </div>
    </Container>
  );
};

export default PetCollection;
