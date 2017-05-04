'use strict'

import React from 'react'
import { render } from 'react-dom'
import SignUp from 'SignUp'

// app css
require('applicationStyles')

render(
  <div>
    <SignUp />
  </div>,
  document.getElementById('app')
)
