'use strict'

import React from 'react'
import pouchdb from 'pouchdb-browser'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from 'configureStore'
import App from 'App'

import config from '../conf.json'


const localdb = new pouchdb(config.db.school.local)
const remoteDb = config.db.school.remote
const store = configureStore(localdb)


// app css
require('applicationStyles')


render(
  <Provider store={store}>
    <App
      config={config}
      localdb={localdb}
      remoteDb={remoteDb}
      />
  </Provider>,
  document.getElementById('app')
)
