import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import '../public/css/style.css'

import { Container, Button } from 'react-bootstrap'

const GettingStartedComponent = () => {
  return (
    <section id="getting-started">
      <Container className="text-center text-white mt-5">
        <div className="bg-primary-darkblue rounded-3 p-5">
          <h1 className="h1 text-white text-center">
            Sewa Mobil di Bali Sekarang
          </h1>
          <p className="w-50 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link to="/cars">
            <Button className="btn bg-button text-white mt-3">
              Mulai Sewa Mobil
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  )
}

export default GettingStartedComponent
