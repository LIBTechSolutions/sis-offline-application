'use strict'

import React from 'react'
import { render } from 'react-dom'
import SignUp from 'SignUp'
import SignUpForm from 'SignUpForm'

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
  <div className='top-bar'>
        <div className='top-bar-left'>
          <ul className='menu'>
            <li className='menu-text'>SIS Offline Application</li>
            <li>
            	<ul className='dropdown menu' data-dropdown-menu>
				  <li>
				    <button className='button' type='button'>Create</button>
				    <ul className='menu'>
				      <li><button className='button' type='button'>Registration Info</button></li>
				      <li><button className='button' type='button'>Fee Info</button></li>
				      <li><button className='button' type='button'>Grade Info</button></li>
				    </ul>
				  </li>
				</ul>
			</li>
			<li className='menu-text'></li>
			<li>
            	<ul className='dropdown menu' data-dropdown-menu>
				  <li>
				    <button className='button' type='button'>View</button>
				    <ul className='menu'>
				      <li><button className='button' type='button'>Registration</button></li>
				      <li><button className='button' type='button'>Fee</button></li>
				      <li><button className='button' type='button'>Grade</button></li>
				    </ul>
				  </li>
				</ul>
			</li>
		    </ul>
  		</div>
  </div>
  	<SignUp />
  </div>,
  document.getElementById('app')
)
