'use strict'

import React from 'react'
import { render } from 'react-dom'
import Header from 'Header'

// Load foundations
import 'jquery'
import 'foundation-sites'

$(document).ready(function ($) {
  $(document).foundation();
})


// app css
require('applicationStyles')


render(
  <div>
    <Header />
  </div>,
  document.getElementById('app')
)
