'use client';
import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import blog from '../../assets/images/blogt.jpeg';
import blog2 from '../../assets/images/blog2.png';
import blog3 from '../../assets/images/blog3.png';
import styles from './Blog.module.css';

const Blog = () => {
  return (
    <>
      <Container>
        <Row className={styles.blogCon}>
          <h2 className={styles.tilte}>Our Blogs</h2>

          <Col sm={12} md={12} lg={4} className="mt-5 mt-lg-0 ">
            <Image
              className={styles.img}
              src={blog}
              quality={80}
              placeholder="blur"
              alt="blog.png"
            />
            <Row>
              <Col>
                <article>
                  <h5 className={styles.cardTitle}>
                    How to Choose the Right Bully Stick for Your Dog
                  </h5>
                  <p className={styles.cardPara}>
                    Below is an excerpt of porch.com article “ Moving with Pets?
                    We have the Experts advice to do it Properly.
                  </p>
                </article>
                <span className="">
                  <button className={styles.btn}>view Details</button>
                </span>
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={12} lg={4} className="my-3 my-lg-0">
            <Image
              className={styles.img}
              src={blog2}
              quality={80}
              placeholder="blur"
              alt="blog.png"
            />
            <Row>
              <Col>
                <article>
                  <h5 className={styles.cardTitle}>
                    Saving Lives: Animal House Shelter And Downtown Pet Supply
                  </h5>
                  <p className={styles.cardPara}>
                    Below is an excerpt of porch.com article “ Moving with Pets?
                    We have the Experts advice to do it Properly.
                  </p>
                </article>
                <span className="">
                  <button className={styles.btn}>view Details</button>
                </span>
              </Col>
            </Row>
          </Col>
          <Col sm={12} md={12} lg={4}>
            <Image
              className={styles.img}
              src={blog3}
              quality={80}
              placeholder="blur"
              alt="blog.png"
            />
            <Row>
              <Col>
                <article>
                  <h5 className={styles.cardTitle}>
                    Himalayan Yak Chews: 11 Benefits You Need To Know
                  </h5>
                  <p className={styles.cardPara}>
                    Below is an excerpt of porch.com article “ Moving with Pets?
                    We have the Experts advice to do it Properly.
                  </p>
                </article>
                <span className="">
                  <button className={styles.btn}>view Details</button>
                </span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Blog;
