import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch } from 'react-redux'
import '../public/css/style.css'
import { Container, Button, Row, Col, Form } from 'react-bootstrap'
import Swal from "sweetalert2"

import HeaderCar from '../public/img/HeaderCar.png'
import { filterCar } from '../redux/actions/carActions'

const FormSearchComponent = () => {
  const dispatch = useDispatch()

  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [capacity, setCapacity] = useState('')
  const [driver, setDriver] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (time === '' || driver === '' || date === '') {
      //alert('Isikan kolom pencarian terlebih dahulu')
      Swal.fire({
        position: "center",
        icon: "question",
        titleText: "Isikan kolom pencarian terlebih dahulu",
        showConfirmButton: false,
        timer: 950,
      });
    }
    if ((time !== '' && date !== '') || capacity !== '') {
      dispatch(filterCar({ time, date, capacity }))
    }
  }
  return (
    <>
      <div className="bg-aliceblue">
        <Container className="pt-5 mt-5">
          <Row>
            <Col lg className="my-auto">
              <h1 className="h1 fw-bold me-4">
                Sewa & Rental Mobil Terbaik di kawasan Bandar Lampung
              </h1>
              <p className="mt-20px w-75">
                Selamat datang di Binar Rental Car. Kami menyediakan mobil
                kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                kebutuhanmu untuk sewa mobil selama 24 jam.
              </p>
            </Col>
            <Col lg>
              <img src={HeaderCar} className="img-fluid" alt="" />
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Form onSubmit={handleSubmit}>
          <div
            className="cars-box-search mt- p-3 row row-cols-xl-auto mx-auto mb-4"
            style={{ marginTop: '-40px' }}
          >
            <div className="col-xxl p-2 mx-auto inputDriver">
              <label
                htmlFor="TipeDriver"
                className="pb-2"
                style={{ fontSize: '14px' }}
              >
                Tipe Driver
              </label>
              <select
                className="form-select"
                id="driver"
                value={driver}
                onChange={(e) => setDriver(e.target.value)}
              >
                <option value="">Pilih Driver</option>
                <option value="yes">Dengan Supir</option>
                <option value="no">Tanpa Supir(Lepas Kunci)</option>
              </select>
            </div>
            <div className="col-xxl p-2 mx-auto inputDate">
              <label
                htmlFor="Tanggal"
                className="pb-2"
                style={{ fontSize: '14px' }}
              >
                Tanggal
              </label>
              <input
                type="date"
                id="date"
                className="form-control"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="col-xxl p-2 mx-auto inputTime">
              <label
                htmlFor="Time"
                className="pb-2"
                style={{ fontSize: '14px' }}
              >
                Waktu Jemput/Ambil
              </label>
              <input
                type="time"
                id="time"
                className="form-control"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </div>
            <div
              className="col-xxl p-2 mx-auto inputPassanger"
              style={{ minWidth: '200px' }}
            >
              <label
                htmlFor="Tanggal"
                className="pb-2"
                style={{ fontSize: '13.5px' }}
              >
                Jumlah Penumpang (optional)
              </label>
              <input
                type="number"
                id="passanger"
                className="form-control icon-rtl-passanger"
                placeholder="Jumlah Penumpang"
                value={capacity}
                onChange={(e) => setCapacity(e.target.value)}
              />
            </div>
            <div
              className="col-xl p-2"
              style={{
                display: 'inline',
                alignSelf: 'flex-end',
                height: '100%',
              }}
            >
              <Button
                className="btn bg-button text-white"
                type="submit"
                id="btnFilterCar"
              >
                Cari Mobil
              </Button>
            </div>
          </div>
        </Form>
      </Container>
    </>
  )
}

export default FormSearchComponent
