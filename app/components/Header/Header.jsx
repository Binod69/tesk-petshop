'use client';
import Link from 'next/link';
import Image from 'next/image';
// import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import AddToCartButton from '../ui/AddToCartButton';
import AddtoCartMobile from '../ui/AddtoCartMobile';
// import logo from '../../assets/images/animal-shelter.png';
// import { AiOutlineSearch } from 'react-icons/ai';
import searchIcon from '../../assets/images/Group 1.svg';
import love from '../../assets/images/Vector.svg';

import styles from './header.module.css';

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <Navbar expand="lg" className=" mb-3">
          <Container>
            <h4 className={styles.brandContainer}>
              <Link
                className={`${styles.brandLogo} nav-link order-last`}
                href="/"
              >
                {/* <Image src={logo} alt="logo.png" width={50} height={50} /> */}
                Your Logo Here
              </Link>
            </h4>
            <div className=" order-last d-none d-lg-block">
              <AddToCartButton />
            </div>
            <div className=" d-block d-lg-none">
              <AddtoCartMobile />
            </div>
            <Navbar.Toggle
              className="order-first order-lg-0"
              aria-controls={`offcanvasNavbar-expand`}
            />
            <Navbar.Offcanvas
              className="me-auto"
              id={`offcanvasNavbar-expand`}
              aria-labelledby={`offcanvasNavbarLabel-expand`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>
                  Your Logo Here
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start   flex-grow-1 pe-3 gap-3 gap-lg-5 d-lg-flex justify-content-lg-center flex-lg-row align-items-lg-center">
                  <Link className={`${styles.linkNavHome} `} href="/">
                    Home
                  </Link>

                  <Link className={`${styles.linkNav}`} href="/about">
                    About
                  </Link>
                  <Link className={`${styles.linkNav}`} href="/">
                    Services
                  </Link>
                  <Link className={`${styles.linkNav}`} href="/">
                    Breeds
                  </Link>
                  <Link className={`${styles.linkNav}`} href="/">
                    Shop
                  </Link>
                  <Link className={`${styles.linkNav}`} href="/">
                    Gallery
                  </Link>
                </Nav>

                <Form className="d-flex me-4  ">
                  <div className=" position-relative">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className={styles.search}
                      aria-label="Search"
                    />

                    <div className={styles.searchIcon}>
                      <Image src={searchIcon} alt="search.svg" />
                    </div>
                  </div>
                  <div className=" ms-2 d-none  d-lg-flex justify-content-lg-center flex-lg-row align-items-lg-center">
                    <Image src={love} alt="love.svg" />
                  </div>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
