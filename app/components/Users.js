'use strict'

import React from 'react'

export default class Users extends React.Component {

  render () {
    let {yourName, userName, email, phoneNumber, password} = this.props
    return (
      <div>
        <p>Name: {yourName} Username: {userName} Email: {email} Phone: {phoneNumber} Password: {password}</p>
      </div>
    )
  }

}
