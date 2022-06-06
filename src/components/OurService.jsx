import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/css/style.css'
import { Container, Row, Col } from 'react-bootstrap'

import OurService from '../public/img/OurService.png'
import Checklist from '../public/img/Checklist.png'

const OurServiceComponent = () => {
  return (
    <section id="ourService" className="pt-5 mt-5">
      <Container>
        <Row>
          <Col lg>
            <div className="text-center py-4">
              <img src={OurService} className="img-fluid" alt="" />
            </div>
          </Col>
          <Col lg className="py-4">
            <h2 className="h2 mb-4">
              Best Car Rental for any kind of trip in Bali!
            </h2>
            <p className="mb-4">
              Sewa mobil di Bali bersama Binar Car Rental jaminan harga lebih
              murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
              pelayanan terbaik untuk perjalanan wisata, bisnis, wedding,
              meeting, dll.
            </p>
            <div className="my-3">
              <img
                src={Checklist}
                className="me-3 our-service-checklist"
                alt=""
              />
              Sewa Mobil Dengan Supir di Bali 12 Jam
            </div>
            <div className="my-3">
              <img
                src={Checklist}
                className="me-3 our-service-checklist"
                alt=""
              />
              Sewa Mobil Lepas Kunci di Bali 24 Jam
            </div>
            <div className="my-3">
              <img
                src={Checklist}
                className="me-3 our-service-checklist"
                alt=""
              />
              Sewa Mobil Jangka Panjang Bulanan
            </div>
            <div className="my-3">
              <img
                src={Checklist}
                className="me-3 our-service-checklist"
                alt=""
              />
              Gratis Antar - Jemput Mobil di Bandara
            </div>
            <div className="my-3">
              <img
                src={Checklist}
                className="me-3 our-service-checklist"
                alt=""
              />
              Layanan Airport Transfer / Drop In Out
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default OurServiceComponent
