import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/css/style.css'
import { Container, Button, Row, Col } from 'react-bootstrap'

import HeaderCar from '../public/img/HeaderCar.png'
import { Link } from 'react-router-dom'

const HeaderComponent = () => {
  return (
    <div className="bg-aliceblue">
      <Container className="pt-5 mt-5">
        <Row>
          <Col lg className="my-auto">
            <h1 className="h1 fw-bold me-4">
              Sewa & Rental Mobil Terbaik di kawasan Bali
            </h1>
            <p className="w-75">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
            <Link to="/cars">
              <Button className="bg-button border-0 mb-5">
                Mulai Sewa Mobil
              </Button>
            </Link>
          </Col>
          <Col lg>
            <img src={HeaderCar} className="img-fluid" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HeaderComponent
