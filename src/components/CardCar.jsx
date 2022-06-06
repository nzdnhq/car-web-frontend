import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/css/style.css'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { filterCar } from '../redux/actions/carActions'

const CardCarComponent = () => {
  const dispatch = useDispatch()
  const { cars, error } = useSelector((state) => state.car)

  useEffect(() => {
    ;(async () => {
      dispatch(filterCar())
    })()
  }, [dispatch])

  useEffect(() => {
    if (error) {
      alert(error)
    }
  }, [error])

  return (
    <Container>
      <Row className="my-5">
        {cars.length === 0 ? (
          <>
            <h2 className="text-center my-5">Silahkan lakukan pencarian</h2>
          </>
        ) : (
          cars.map((car) => (
            <Col key={car.id} md={4} className="my-2">
              <div className="row row-cols-auto justify-content-center">
                <div className="col m-2 ">
                  <div
                    className="card"
                    style={{ width: '25rem', height: '550px' }}
                  >
                    <img
                      src={car.image}
                      className="card-img-top img-fluid"
                      alt=""
                      style={{ height: '190px', objectFit: 'cover' }}
                    />
                    <div className="card-body" style={{ fontSize: '14px' }}>
                      <p className="card-title">{car.manufacture}</p>
                      <p className="fw-bold">Rp {car.rentperday}</p>
                      <p className="card-text" style={{ height: '90px' }}>
                        {car.description}
                      </p>
                      <div className="my-2">
                        <i className="bi bi-people me-2"></i>
                        {car.capacity} Orang
                      </div>
                      <div className="my-2">
                        <i className="bi bi-gear me-2"></i>
                        {car.transmission}
                      </div>
                      <div className="my-2">
                        <i className="bi bi-calendar4 me-2"></i>
                        {car.year}
                      </div>
                      <a
                        href="/cars"
                        className="btn bg-button text-white w-100 mt-2 fw-bold mt-4"
                        style={{ fontSize: '14px' }}
                      >
                        Pilih Mobil
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))
        )}
      </Row>
    </Container>
  )
}

export default CardCarComponent
