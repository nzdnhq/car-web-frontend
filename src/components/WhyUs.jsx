import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/css/style.css'
import { Container, Row, Col, Card } from 'react-bootstrap'

import Icon24Hrs from '../public/img/Icon24Hrs.png'
import IconComplete from '../public/img/IconComplete.png'
import IconPrice from '../public/img/IconPrice.png'
import IconProfessional from '../public/img/IconProfessional.png'

const WhyUsComponent = () => {
  return (
    <section id="whyUs" className="pt-5 mt-4">
      <Container className="pt-4">
        <h2 className="h2">Why Us?</h2>
        <p>Mengapa harus pilih Binar Car Rental?</p>
        <Row className="mt-4">
          <Col lg={3} sm={6} className="my-3">
            <Card>
              <Card.Body className="m-3 py-5" style={{ height: '260px' }}>
                <img src={IconComplete} className="why-us-icon" alt="" />
                <Card.Title className="fw-bold mt-3">Mobil Lengkap</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} sm={6} className="my-3">
            <Card>
              <Card.Body className="m-3 py-5" style={{ height: '260px' }}>
                <img src={IconPrice} className="why-us-icon" alt="" />
                <Card.Title className="fw-bold mt-3">Harga Murah</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} sm={6} className="my-3">
            <Card>
              <Card.Body className="m-3 py-5" style={{ height: '260px' }}>
                <img src={Icon24Hrs} className="why-us-icon" alt="" />
                <Card.Title className="fw-bold mt-3">Layanan 24 Jam</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} sm={6} className="my-3">
            <Card>
              <Card.Body className="m-3 py-5" style={{ height: '260px' }}>
                <img src={IconProfessional} className="why-us-icon" alt="" />
                <Card.Title className="fw-bold mt-3">
                  Sopir Profesional
                </Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default WhyUsComponent
