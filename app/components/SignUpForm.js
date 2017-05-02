'use strict'

import React from 'react'


export default class SignUpForm extends React.Component {
  constructor (props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    let yourName = this.refs.yourName.value
    let userName = this.refs.userName.value
    let email = this.refs.email.value
    let phoneNumber = this.refs.phoneNumber.value
    let password = this.refs.password.value
    let reenterPassword = this.refs.reenterPassword.value

    if (yourName.length
      && userName.length
      && email.length
      && phoneNumber.length
      && password.length
      && reenterPassword.length > 0) {
        this.refs.yourName.value = ''
        this.refs.userName.value =''
        this.refs.email.value = ''
        this.refs.phoneNumber.value =''
        this.refs.password.value =''
        this.refs.reenterPassword.value =''
        this.props.onAddValue(yourName, userName, email, phoneNumber, password, reenterPassword)
      } else {
        this.refs.yourName.focus()
        this.refs.userName.focus()
        this.refs.email.focus()
        this.refs.phoneNumber.focus()
        this.refs.password.focus()
        this.refs.reenterPassword.focus()
      }
  }
  render () {
    return (
      <div className="row">
      <div className="column small-centered small-11 medium-6 large-5">
      <div className='form'>
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <input type='text' ref='yourName' placeholder='Your Name'/>
          <input type='text' ref='userName' placeholder='Username'/>
          <input type='email' ref='email' placeholder='Email'/>
          <input type='text' ref='phoneNumber' placeholder='Phone Number'/>
          <input type='password' ref='password' placeholder='Password'/>
          <input type='password' ref='reenterPassword' placeholder='Re-enter Password'/>
          <button className='button expanded'>Signup</button>
        </form>
        </div>
      </div>
    </div>
  </div>
    )
  }
}
