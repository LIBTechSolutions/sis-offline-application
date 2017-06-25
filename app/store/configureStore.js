'use strict'

import PouchMiddleware from 'pouch-redux-middleware'
import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers'
import { insertInfo, updateInfo, deleteInfo } from 'details'

export default function configureStore (localdb) {
  const pouchMiddleware = PouchMiddleware([{
    path: '/schoolDetails',
    db: localdb,
    actions: {
      insert: insertInfo,
      update: updateInfo,
      remove: deleteInfo
    }
  }])

  const store = createStore(
    reducer,
    undefined,
    applyMiddleware(pouchMiddleware)
  )

  return store
}
