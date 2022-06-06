import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/css/style.css'
import { Container, Row, Col } from 'react-bootstrap'

import IconTwitch from '../public/img/IconTwitch.png'
import IconTwitter from '../public/img/IconTwitter.png'
import IconInstagram from '../public/img/IconInstagram.png'
import IconFacebook from '../public/img/IconFacebook.png'
import IconMail from '../public/img/IconMail.png'
import IconBinar from '../public/img/binarcar.png'

const FooterComponent = () => {
  return (
    <footer className="my-5">
      <Container>
        <Row>
          <Col lg={4} sm={6} className="fw-light">
            <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
            <p>binarcarrental@gmail.com</p>
            <p>081-233-334-808</p>
          </Col>
          <Col lg={2} sm={6}>
            <p>
              <a href="#our-service" className="footer-link fw-bold">
                Our Service
              </a>
            </p>
            <p>
              <a href="#why-us" className="footer-link fw-bold">
                Why Us
              </a>
            </p>
            <p>
              <a href="#testimonial" className="footer-link fw-bold">
                Testimonial
              </a>
            </p>
            <p>
              <a href="#faq" className="footer-link fw-bold">
                FAQ
              </a>
            </p>
          </Col>
          <Col lg={3} sm={6} className="fw-light">
            <p>Connect with us</p>
            <img src={IconFacebook} className="footer-social" alt="" />
            <img src={IconInstagram} className="footer-social" alt="" />
            <img src={IconTwitter} className="footer-social" alt="" />
            <img src={IconMail} className="footer-social" alt="" />
            <img src={IconTwitch} className="footer-social" alt="" />
          </Col>
          <Col lg={3} sm={6} className="fw-light">
            <p>Copyright Binar 2022</p>
            <img src={IconBinar} className="footer-logo" alt="icon" href="/" />
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default FooterComponent
