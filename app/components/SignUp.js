'use strict'

import React from 'react'
import SignUpForm from 'SignUpForm'
import uuid from 'uuid/v4'
import {setUsers, getUsers, filterUsers} from 'UsersApi'
import UserList from 'UserList'

export default class SignUp extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      searchText: '',
      users: getUsers()
    }
    this.handleUsers = this.handleUsers.bind(this)
  }
  componentDidUpdate () {
    setUsers(this.state.users)
  }
  handleSearch (showCompleted, searchText) {
    this.setState({
      searchText: searchText.toLowerCase()
    })
  }

  handleUsers (yourName, userName, email, phoneNumber, password, reenterPassword) {
    this.setState({
      users: [
        ...this.state.users,
        {
          id: uuid(),
          yourName: yourName,
          userName: userName,
          email: email,
          phoneNumber: phoneNumber,
          password: password,
          reenterPassword: reenterPassword
        }
      ]
    })
  }

  render () {
    let {users, searchText} = this.state
    let filteredUsers = filterUsers(users, searchText)
    return (
      <div>
        <h1 className='page-title'>Sign Up Now</h1>
        <div className='row'>
          <div className='data'>
            <UserList users={filteredUsers} />
          </div>
        </div>
        <SignUpForm onAddValue={this.handleUsers} />
      </div>
    )
  }
}
