import { combineReducers } from 'redux'

import authReducer from './authReducer'
import carReducer from './carReducer'

export default combineReducers({
  auth: authReducer,
  car: carReducer,
})
