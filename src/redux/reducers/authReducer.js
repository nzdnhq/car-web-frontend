import { AUTH_ERROR, LOGIN, LOGOUT, GET_USER } from '../actions/types'

const initialState = {
  isAuthenticated: !!localStorage.getItem('token'),
  token: localStorage.getItem('token'),
  user: {},
  error: null,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('token', action.payload)
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload,
        error: null,
      }
    case LOGOUT:
      localStorage.removeItem('token')
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        user: {},
        error: null,
      }
    case AUTH_ERROR:
      localStorage.removeItem('token')
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        error: action.payload,
      }
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      }
    default:
      return state
  }
}

export default authReducer
