import { GET_FILTER, CARS_ERROR } from './types'

export const filterCar = (data) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token')
    // sending query
    const response = await fetch(
      `${process.env.REACT_APP_ENDPOINT_SEARCH_CAR}` +
        new URLSearchParams({
          time: data.time,
          date: data.date,
          capacity: data.capacity,
        }),
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
    )
    let result = await response.json()
    dispatch({
      type: GET_FILTER,
      payload: result.data,
    })
  } catch (error) {
    dispatch({
      type: CARS_ERROR,
      payload: error.response,
    })
  }
}
