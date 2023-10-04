import {  Link } from "react-router-dom";
import './Nav.css'
import Login from './Login';
import Carousel from './Slide/Carousel';
import React, { useState, useEffect } from 'react';
import Products from "./Plist/Products";
import { MDBContainer } from 'mdb-react-ui-kit';
import ContactUs from "./Approach/ContactUs";
import Footer from "./IFoot/Footer";
import AboutUs from "./About/AboutUs";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  const containerStyle = {
    backgroundImage: 'url("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fvideos%2Fblack-and-white-illustration&psig=AOvVaw2efV_JejJkRCls9i0ilQDv&ust=1696437859294000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLjSs8-p2oEDFQAAAAAdAAAAABAh")',
    backgroundSize: 'cover', // Adjust the background size as needed
    backgroundPosition: 'center', // Adjust the background position as needed
    minHeight: '100vh', // Set a minimum height to ensure content is visible
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // Add any additional styles you need
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        {/* Animated navbar */}
        <nav
          className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'navbar-scrolled' : 'navbar-scroll'}`}
        >
          <div className="container-fluid">
            <button
              className="navbar-toggler ps-0"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarExample01"
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="d-flex justify-content-start align-items-center">
                <i className="fas fa-bars"></i>
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarExample01">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" aria-current="page" href="#intro">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href=""
                    rel="nofollow"
                    target="_blank"
                  >
                    Products
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href=""
                    target="_blank"
                  >
                    About Us
                  </a>
                </li>

                <li className="nav-item">
                  <Link to="/log" className="nav-link" style={{ color: 'white' }}>
                    Login
                  </Link>
                </li>
              </ul>

              <ul className="navbar-nav flex-row">
                {/* Icons */}
                <li className="nav-item">
                  <a
                    className="nav-link pe-2"
                    href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
                    rel="nofollow"
                    target="_blank"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link px-2"
                    href="https://www.facebook.com/mdbootstrap"
                    rel="nofollow"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link px-2"
                    href="https://twitter.com/MDBootstrap"
                    rel="nofollow"
                    target="_blank"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a
                    className="nav-link ps-2"
                    href="https://github.com/mdbootstrap/mdb-ui-kit"
                    rel="nofollow"
                    target="_blank"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
        {/* Animated navbar */}

        {/* Background image */}
        <div
          id="intro"
          className="bg-image"
          style={{
            backgroundImage:
              'url(https://mdbcdn.b-cdn.net/img/new/fluid/city/112.jpg)',
            height: '100vh',
          }}
        >
          <div className="mask text-white" style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
            <div className="container d-flex align-items-center text-center h-100">
              <div>
                <h1 className="mb-5">Vijnapanam</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
                  molestiae laboriosam numquam expedita ullam saepe ipsam, deserunt
                  provident corporis, sit non accusamus maxime, magni nulla quasi iste
                  ipsa architecto? Autem!
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Background image */}
      </header>
      <br></br>
      <MDBContainer  breakpoint="sm">
      <h1 style={{ fontFamily: 'revert', color: 'black'}}>
      Advertisment</h1>
      <br></br>
      <Carousel/>
      </MDBContainer>
      <br></br>
      <MDBContainer breakpoint="md">
       <h1 style={{fontFamily:'revert',color:'black'}}>Products</h1>
       <br></br>
      <Products/>
      </MDBContainer>
      <br></br>
      <MDBContainer breakpoint="md">
       <h1 style={{fontFamily:'revert',color:'black'}}>About Us</h1>
       <br></br>
       <AboutUs/>
      </MDBContainer>
      <br></br>
      <MDBContainer breakpoint="md">
       <h1 style={{fontFamily:'revert',color:'black'}}>Contact Us</h1>
       <br></br>
       <ContactUs/>
      </MDBContainer>
      <center>

      <Footer/>
      </center>
    </>
    
  )
}


