import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGoogleLogin } from '@react-oauth/google'
import { Navigate } from 'react-router-dom'
import HeaderCar from '../public/img/HeaderCar.png'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

import { registerViaForm, loginWithGoogle } from '../redux/actions/authActions'

const RegisterFormComponent = () => {
  const dispatch = useDispatch()
  const { isAuthenticated, error } = useSelector((state) => state.auth)

  useEffect(() => {
    if (error) {
      alert(error)
    }
  }, [error])

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (email === '') {
      alert('Email is required')
    }
    if (password === '') {
      alert('Password is required')
    }
    if (email !== '' && password !== '') {
      dispatch(registerViaForm({name, email, password }))
    }
  }

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      dispatch(loginWithGoogle(tokenResponse.access_token))
    },
    onError: (error) => {
      alert(error)
    },
  })

  return (
    <>
      {!isAuthenticated ? (
        <div className="bg-aliceblue">
          <Container className="py-5">
            <Row className="pb-5">
              <Col lg={5} className="my-auto form-register">
                <Form onSubmit={handleSubmit}>
                  <h3>Register</h3>
                  <div className="form-group">
                    <label className="labelLogin">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="labelLogin">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="labelLogin">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="btn btn-md btn-block col-12 text-light signIn"
                  >
                    Sign up
                  </Button>
                  <p className="sign-up text-right">
                    Have an Account? <a href="/login">Sign In?</a>
                  </p>
                  <Button
                    type="button"
                    onClick={() => googleLogin()}
                    className="btn btn-md btn-block col-12 text-light signGoogle"
                  >
                    <i className="bi bi-google me-2"></i>Sign In with Google
                  </Button>
                </Form>
              </Col>
              <Col lg={6}>
                <img src={HeaderCar} className="img-fluid imgRegister" alt="" />
              </Col>
            </Row>
          </Container>
        </div>
      ) : (
        <Navigate to="/" />
      )}
    </>
  )
}

export default RegisterFormComponent
