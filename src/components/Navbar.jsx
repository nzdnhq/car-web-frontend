import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../public/css/style.css'
import image from '../public/img/logo.png'
import {
  Container,
  Navbar,
  Nav,
  Button,
  Offcanvas,
  DropdownButton,
  Dropdown,
} from 'react-bootstrap'
import { logout, getUser } from '../redux/actions/authActions'

const NavbarComponent = () => {
  const dispatch = useDispatch()
  const { isAuthenticated, error, user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (error) {
      alert(error)
    }
  }, [error])

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getUser())
    }
  }, [isAuthenticated])

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div className="bg-aliceblue">
      {['md'].map((expand) => (
        <Navbar
          key={expand}
          bg="aliceblue"
          expand={expand}
          className="py-1"
          fixed="top"
        >
          <Container>
            <Link to="/">
              <Navbar.Brand className="px-5 text-white">
                <img src={image} alt="logo" width={120} height={60} />
              </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  BCR
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link
                    href="https://challenge-7-frontend.herokuapp.com/#ourService"
                    className="fw-bold my-2 mx-2"
                  >
                    Our Service
                  </Nav.Link>
                  <Nav.Link
                    href="https://challenge-7-frontend.herokuapp.com/#whyUs"
                    className="fw-bold my-2 mx-2"
                  >
                    Why Us
                  </Nav.Link>
                  <Nav.Link
                    href="https://challenge-7-frontend.herokuapp.com/#testimonial"
                    className="fw-bold my-2 mx-2"
                  >
                    Testimonial
                  </Nav.Link>
                  <Nav.Link
                    href="https://challenge-7-frontend.herokuapp.com/#faq"
                    className="fw-bold my-2 mx-2"
                  >
                    FAQ
                  </Nav.Link>
                  {!isAuthenticated ? (
                    <Link to="/register" className="fw-bold nav-link">
                      <Button className="bg-button border-0">Register</Button>
                    </Link>
                  ) : (
                    <>
                      <DropdownButton
                        id="dropdown-basic-button"
                        title={!user.name ? '' : user.name}
                        className="my-2"
                      >
                        <Dropdown.Item onClick={handleLogout}>
                          Logout
                        </Dropdown.Item>
                      </DropdownButton>
                    </>
                  )}
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </div>
  )
}

export default NavbarComponent
