'use strict'

import React from 'react'
import FeesInfo from 'FeesInfo'
import {setUsers, getUsers, filterUsers} from 'UsersApi'
import UserList from 'UserList'

export default class FeesForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      fee: getUsers()
    }
    this.submitInfo = this.submitInfo.bind(this)
  }
  componentDidUpdate () {
    setUsers(this.state.fee)
  }

  submitInfo (event) {
    event.preventDefault()
    let feeInfo = Object.assign({}, this.props.fee)

    this.setState({
      fee: [
        ...this.state.fee,
        {feeInfo}
      ]

    })
    this.props.clearCurrentFee()
  }



  render () {
    let {
      fee,
      edit,
      updateFee,
      updateFeeState,
    } = this.props
    return (
      <div className='student-form'>
        <form action='' onSubmit={this.submitInfo}>
          <div className='student-form__container'>
          <FeesInfo edit={edit} handleChange={updateFee('FeesInfo')} {...fee.FeesInfo} />
          <button className='button expanded' type='submit'>Save</button>
          </div>
        </form>
      </div>
    )
  }
}
