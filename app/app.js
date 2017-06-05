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

const regDb = new pouchdb(config.reg_db.local)
const gradeDb = new pouchdb(config.grade_db.local)
const feeDb = new pouchdb(config.fee_db.local)


// app css
require('applicationStyles')


render(
  <div>
    <App
      config={config}
      regDb={regDb}
      gradeDb={gradeDb}
      feeDb={feeDb}
      />
  </div>,
  document.getElementById('app')
)
