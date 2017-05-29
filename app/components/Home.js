'use strict'

import React from 'react'
import Header from 'Header'
import Login from 'Login'


export default function Home (props) {

  // Load foundations
  require('jquery')
  require('foundation-sites')

  $(document).ready(function ($) {
    $(document).foundation();
  })


  let content = (<Login checkLogin={props.checkLogin} />)

  if (props.loggedIn) {
    content = (<Header {...props} />)
  }

  return (
      <div className='app-content'>{content}</div>
  )
}
