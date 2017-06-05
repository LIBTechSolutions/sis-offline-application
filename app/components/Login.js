'use strict'

import React from 'react'

export default class Login extends React.Component {
  constructor (props) {
    super(props)
    this.authenticate = this.authenticate.bind(this)
  }

  authenticate (event) {
    event.preventDefault()
    let elements = event.target.elements
    let email = elements.namedItem('email').value
    let password = elements.namedItem('password').value

    this.props.checkLogin(email, password)
  }

  render () {

    return (
      <div >
      <div className='row'>
        <div className='column small-centered medium-4 large-6'>
      <div className='form'>
        <form action='' onSubmit={this.authenticate}>
          <div className='login'>
            <h2>SIS App</h2>
            <input name='email' type='email' placeholder='E-mail address' autoFocus required />
            <input name='password' type='password' placeholder='Password' autoFocus required />
            <button type='submit' className='button expanded'>Login</button>
          </div>
        </form>
      </div>
      </div>
      </div>
      </div>
    )
  }
}
