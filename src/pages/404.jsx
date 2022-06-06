import images from '../public/img/image_car.png'
import '../public/css/style.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Row, Col } from 'react-bootstrap'

function notFound() {
  return (
    <div className="App">
      <Navbar />
      <div
        className="container"
        style={{ marginTop: '8rem', marginBottom: '8rem' }}
      >
        <Row className="justify-content-md-center">
          <Col xs={12} sm={4} md={3}>
            <img src={images} alt="logo" />
          </Col>
        </Row>
        <h3 style={{ textAlign: 'center' }}>Halaman Tidak Ditemukan</h3>
      </div>
      <Footer />
    </div>
  )
}

export default notFound
