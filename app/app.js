'use strict'

import React from 'react'
import pouchdb from 'pouchdb-browser'
import { render } from 'react-dom'
import Header from 'Header'

import config from '../conf.json'


// Load foundations
import 'jquery'
import 'foundation-sites'

$(document).ready(function ($) {
  $(document).foundation();
})

const schoolDb = new pouchdb(config.db.local)


// app css
require('applicationStyles')


render(
  <div>
    <Header
      schoolDb={schoolDb}
      />
  </div>,
  document.getElementById('app')
)
