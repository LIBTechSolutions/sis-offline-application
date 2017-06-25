'use strict'

import * as types from 'ActionTypes'

export function insertInfo (schoolDetail) {
  return { type: types.INSERT_INFO, schoolDetail }
}

export function updateInfo (schoolDetail) {
  return { type: types.UPDATE_INFO, schoolDetail }
}

export function deleteInfo (schoolDetail) {
  return { type: types.DELETE_INFO, id: schoolDetail._id }
}
