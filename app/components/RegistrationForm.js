'use strict'

import React from 'react'
import RegistrationInfo from 'RegistrationInfo'
import {setUsers, getUsers, filterUsers} from 'UsersApi'
import UserList from 'UserList'

export default class RegistrationForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      school: getUsers()
    }
    this.submitInfo = this.submitInfo.bind(this)
  }
  componentDidUpdate () {
    setUsers(this.state.school)
  }

  submitInfo (event) {
    event.preventDefault()
    let regInfo = Object.assign({}, this.props.school)

    this.setState({
      school: [
        ...this.state.school,
        {regInfo}
      ]

    })
    this.props.clearCurrentSchool()
  }



  render () {
    let {
      school,
      edit,
      updateSchool,
      updateState
    } = this.props
    return (
      <div className='student-form'>
        <form action='' onSubmit={this.submitInfo}>
          <div className='student-form__container'>
          <RegistrationInfo edit={edit} handleChange={updateSchool('RegistrationInfo')} {...school.RegistrationInfo} />
          <button className='button expanded' type='submit'>Save</button>
          </div>
        </form>
      </div>
    )
  }
}
