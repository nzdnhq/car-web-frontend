import { AUTH_ERROR, LOGIN, LOGOUT, GET_USER } from './types'
import Swal from 'sweetalert2'

export const registerViaForm = (data) => async (dispatch) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_ENDPOINT_REGISTER}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const result = await response.json()

    if (result.token) {
      dispatch({
        type: LOGIN,
        payload: result.token,
      })
    } else {
      //alert(result.message)
      Swal.fire({
        position: 'center',
        icon: 'warning',
        titleText: result.message,
        showConfirmButton: false,
        timer: 950,
      })
      authError(result.error)
    }
  } catch (error) {
    authError(error)
  }
}

export const loginViaForm = (data) => async (dispatch) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_ENDPOINT_LOGIN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const result = await response.json()
    if (result.token) {
      dispatch({
        type: LOGIN,
        payload: result.token,
      })
    } else {
      //alert(result.message)
      Swal.fire({
        position: 'center',
        icon: 'warning',
        titleText: result.message,
        showConfirmButton: false,
        timer: 950,
      })
      authError(result.error)
    }
  } catch (error) {
    authError(error)
  }
}

const authError = (error) => async (dispatch) => {
  dispatch({
    type: AUTH_ERROR,
    payload: error.message,
  })

  setTimeout(() => {
    dispatch({
      type: AUTH_ERROR,
      payload: null,
    })
  }, 5000)
}

export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  })
}

export const loginWithGoogle = (accessToken) => async (dispatch) => {
  try {
    const data = {
      access_token: accessToken,
    }
    const response = await fetch(`${process.env.REACT_APP_ENDPOINT_GOOGLE}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const result = await response.json()

    if (result.token) {
      dispatch({
        type: LOGIN,
        payload: result.token,
      })
    } else {
      //alert(result.message)
      Swal.fire({
        position: 'center',
        icon: 'warning',
        titleText: result.message,
        showConfirmButton: false,
        timer: 950,
      })
      authError(result.error)
    }
  } catch (error) {
    authError(error)
  }
}

export const getUser = () => async (dispatch) => {
  try {
    const token = localStorage.getItem('token')
    const response = await fetch(`${process.env.REACT_APP_ENDPOINT_ME}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
    const result = await response.json()
    if (result) {
      dispatch({
        type: GET_USER,
        payload: result.accountData,
      })
    }
    // check if token expired
    if (result.message === 'Token expired') {
      dispatch({
        type: LOGOUT,
      })
    } else {
      // alert(result.message);
      authError(result.error)
    }
  } catch (error) {
    authError(error)
  }
}
