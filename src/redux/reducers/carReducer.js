import { GET_FILTER, CARS_ERROR, LOGOUT } from '../actions/types'

const initialState = {
  cars: [],
  error: null,
}

const carReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILTER:
      return {
        ...state,
        cars: action.payload,
      }
    case LOGOUT:
      return {
        ...state,
        cars: [],
        error: null,
      }
    case CARS_ERROR:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default carReducer
