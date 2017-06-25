'use strict'

import { INSERT_INFO, UPDATE_INFO, DELETE_INFO } from 'ActionTypes'

const initialState = []

export default function schoolDetails (state = initialState, action) {
  switch (action.type) {
    case INSERT_INFO:
      return [
        action.schoolDetail,
        ...state
      ]
    case UPDATE_INFO:
      return state.map(schoolDetail =>
        schoolDetail._id === action.schoolDetail._id
          ? action.schoolDetail
          : schoolDetail
      )
    case DELETE_INFO:
      return state.filter(schoolDetail =>
        schoolDetail._id !== action.id
      )
    default:
      return state
  }
}
