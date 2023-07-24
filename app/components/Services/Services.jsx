'use client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import styles from './service.module.css';
import Link from 'next/link';

const Services = () => {
  return (
    <>
      <Container>
        <Row className={styles.serviceContainer}>
          <Col>
            <article>
              <h2 className={styles.title}>Our Services</h2>
              <p className={styles.para}>
                We provide a wide range of products & services for pets such as
                food, toys, grooming supplies, and veterinary care. We aim to
                meet the needs of pet owners and ensure the health and happiness
                of their furry friends.
              </p>
            </article>
          </Col>
        </Row>

        <Row xs={1} md={2} lg={3} className="g-3 my-lg-4">
          <Col>
            <Card className={styles.card}>
              <Link href="/">
                <Card.Img
                  className={styles.cardImg}
                  variant="top"
                  src="https://s3-alpha-sig.figma.com/img/e2b5/0b55/8f57e5b2a0300e35df519b21e0100b41?Expires=1690761600&Signature=XOnK0NhdX8LnZ4PE--0jgJku3~xy-llsz7Oo4kX1YlJwMEdmgfcOaq6G5BBj2FhLcbsZuCHjdkoaA2Iy1Jkaz~~bgEPWbZBA-vSLlQUzrz3O2zYt1ysghSee4ix9ReGC3yCFJE60ghJGrrXLpmF1yWml8gzOibI9e4VfW5SAje0OkYoPgVNg7lLvsj8jg05GS5-d56C4-EYZz1VVAysKCzTdY4d556C5nNoWSNZduF8LT69SL8sUwCQhrIpVLVVPLZPjzimThnqzY-PEO3afdVx-wRKySSYsGLC0rfMn-Tghw3XBBXvlBqurFOwjoZ-dsbsh0OpCUepxxFSnlYuIOQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                />
              </Link>
              <Card.Body>
                <Card.Title className={styles.cardTitle1}>
                  Dog/Cat Grooming
                </Card.Title>
                <Card.Text className={styles.cardPara1}>
                  We are enhancing our skills, salon, and equipment to meet the
                  challenges of pet grooming.
                </Card.Text>
                <span className=" d-flex justify-content-center align-items-center ">
                  <button className={styles.cardBtn1}>view more</button>
                </span>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className={styles.card}>
              <Link href="/">
                <Card.Img
                  className={styles.cardImg}
                  variant="top"
                  src="https://s3-alpha-sig.figma.com/img/ec4c/7c84/4decc44d958a98d2cdefcfa2afd55d4c?Expires=1691366400&Signature=TX-ywcfFtZmzKmye~bIbh3NILLgMuYAuhvHFe9O3T1WdlIS3LMe4Jz8ktM-BBOooEq03h5-sN6QrdiFw~vHMgTxqfxRxnk5jNygcIFe5NFpOWAzdzA95vaXp5dfVL5ra~mqyr0a-oN~Y3vQ0Sg~JEFoRcEuBeDxmVS18QGpd1C81bWWiaf2a-ThXTH-v586aBpYieTd1644cb~FLrFYuXw4VQQXeuYGGP7om~wGigvG5N~fml1~uv-TUDDuN~HF3L22AGIrRj4~IoISZg16g4f~w1j08HGfAp3WK9VVKtE7lwXx62EDRxAnCk8Xx5XFYWX3yb2VqWHy5PR1bEfINnA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                />
              </Link>
              <Card.Body>
                <Card.Title className={styles.cardTitle2}>
                  Home Treatment
                </Card.Title>
                <Card.Text className={styles.cardPara2}>
                  Our goal is to ensure pet welfare through home treatment and
                  prompt client response.
                </Card.Text>
                <span className=" d-flex justify-content-center align-items-center ">
                  <button className={styles.cardBtn2}>view more</button>
                </span>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className={styles.card}>
              <Link href="/">
                <Card.Img
                  className={styles.cardImg}
                  variant="top"
                  src="https://s3-alpha-sig.figma.com/img/c42d/f381/0ae23df93de58c042947595b8990b3bf?Expires=1691366400&Signature=pu-YWOM8ucy57FeD9jSokZMvryuKNV2rC2EakveOxINOeBV~P9Qs5YMonKtnO5lXtV6gg08-9Q7DbJLZJB9Unk2lMs7AdN-j-PtkwXmbqmzO4~cmvVVC0VSRm6OYg6apuPedbMqQJlH6nvoITeOBQO6Io~9PADVyvrpL27BSxVY33CAqw3jc0Qx4XhmQtrK7g4CMN0vda5YPHvzPoFt8w8n1ZL~Eym89zX9VnOmbK9ksG8athW39bzlyKPlf4A2Gb1TE7cZCjYF9PRYsz-8PCOFjfogOMV~KUZlcebVC1b0djBPQm7fSF8yCb8LbWHvxDz-nUlWtXc-UXOTTCMDzLg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                />
              </Link>
              <Card.Body>
                <Card.Title className={styles.cardTitle3}>
                  Clinical Treatment
                </Card.Title>
                <Card.Text className={styles.cardPara3}>
                  Our clinic offers professional veterinary care with a focus on
                  disease prevention, diagnosis, and treatment.
                </Card.Text>
                <span className=" d-flex justify-content-center align-items-center ">
                  <button className={styles.cardBtn3}>view more</button>
                </span>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className={styles.card}>
              <Link href="/">
                <Card.Img
                  className={styles.cardImg}
                  variant="top"
                  src="https://s3-alpha-sig.figma.com/img/932a/3ef2/c323ea9029bd906e216dd6f66f8d9e29?Expires=1691366400&Signature=eTk2NZV8Kt6S~TK5m5VDIlsQjnRyMxkjVwseLcb5erOFo2kbkV4t8pxfX6fP5QZCE8lhgmmTWiavezI00~SHwMkGaEwCiJ7wXbfZEZR7Tmr4ehLDWHi1q1SdO71ryQEgUhiAyDD7z6vFU7aXkYI5ObodkrHabhWxBgnn8Q6sh37D7zNEcW1VLI0dXNNf2c7bu2x-8CTednTURZrUbPbj7XoZ1CV6ZXKO43cG~UNiYfpScyBY6dIvGve954WYHznsTMtZUxMwjExS7YwAYWVD4Yrc4GtKklYiSsgEOZsRSGqDru7T-kt6rZdKq1C1SO4YijKuKMd9~YxDhpamZn~3ZA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                />
              </Link>
              <Card.Body>
                <Card.Title className={styles.cardTitle4}>
                  Puppies Buying & Selling
                </Card.Title>
                <Card.Text className={styles.cardPara4}>
                  We buy and sell common breed puppies like Golden Retriever,
                  Husky, Pug, etc. 100% guarantee on the breed offered.
                </Card.Text>
                <span className=" d-flex justify-content-center align-items-center ">
                  <button className={styles.cardBtn4}>view more</button>
                </span>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className={styles.card}>
              <Link href="/">
                <Card.Img
                  className={styles.cardImg}
                  variant="top"
                  src="https://s3-alpha-sig.figma.com/img/6ecc/201a/d7cfe0583e396b591e63f10711bab5b7?Expires=1691366400&Signature=cZW88EDz5ivZq7XsKLXMj-DAFglkpVU-zWoGC~JKufYB6tarRak9VJfVgUm9gAeLIU1Nsj4R5wEZ0wmBvwc-jlXbvrVbTFwFrTJrgwJ2oLdKkScEOv-tKIVwswlGL-XYvOU62gai-vqGfNxxc6rYORSjTxmASqYyHHUVe1GFQQMVLpFUUk74UvHGUy25H~465A6mU~bugi1OOEn0gjAyhLm8bzryr1yrj1hjNtBGAaLR~Uyk4gTljxY-cfxUTfHrn6T83FqCOmvcu8queTeYJmeuhE-QVNNksk1ktb3XekCbSBnDpFZ72VqniBaz0A~~Q2kegDvuYNHIRM2voobP2A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                />
              </Link>
              <Card.Body>
                <Card.Title className={styles.cardTitle5}>
                  Dog Training
                </Card.Title>
                <Card.Text className={styles.cardPara5}>
                  Our team of dog trainers is passionate, dedicated, and has
                  years of professional experience.
                </Card.Text>
                <span className=" d-flex justify-content-center align-items-center ">
                  <button className={styles.cardBtn5}>view more</button>
                </span>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className={styles.card}>
              <Link href="/">
                <Card.Img
                  className={styles.cardImg}
                  variant="top"
                  src="https://s3-alpha-sig.figma.com/img/ae60/8b87/721e2b629c28b0b9f6871b0535d968b7?Expires=1691366400&Signature=Nso2anphbj3WSCMjYS4uHDv~Oosit9bdRTu2B-Y8wHMWJba-VHZ-ZE-GTLKEvS1iDGTeVLEw-I1gwuJ8TaSqHS~Mjffr6ZkHWrrFY8UGQOC-7iK6pIxtpKjZu95xjm4LMKVo-ixUgU4zrbOAv8M80jcpbUOn3WXqbBRryn3pYfwD9twZcZER5Mmz7GSL81-cnmKb5~juGumE2Qefjym5VaagG5H3eKn1hjKixQYNVYq2Msm8Mo6dW5WhN9iVRzaTYj~EJCyO5D93LeM5VjgXndJo-pZK8OZpjD~hWZYYrLWwyftPekY0OEKeJWPdhxktDVqEXfHgMwKW8tGA6C8Nlg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                />
              </Link>
              <Card.Body>
                <Card.Title className={styles.cardTitle6}>
                  Dog Matting
                </Card.Title>
                <Card.Text className={styles.cardPara6}>
                  Quality breeding requires experience and passion. We can
                  arrange and facilitate quality breed mating.
                </Card.Text>
                <span className=" d-flex justify-content-center align-items-center ">
                  <button className={styles.cardBtn6}>view more</button>
                </span>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Services;
