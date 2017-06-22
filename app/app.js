'use strict'

import React from 'react'
import pouchdb from 'pouchdb-browser'
import { render } from 'react-dom'
import App from 'App'

import config from '../conf.json'


// Load foundations
import 'jquery'
import 'foundation-sites'

$(document).ready(function ($) {
  $(document).foundation();
})

const localdb = new pouchdb(config.db.school.local)
const remoteDb = config.db.school.remote


// app css
require('applicationStyles')


render(
  <div>
    <App
      config={config}
      localdb={localdb}
      remoteDb={remoteDb}
      />
  </div>,
  document.getElementById('app')
)
