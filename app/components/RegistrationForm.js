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

    <div className='well'>
      <div className='row'>
        <div className='student-form'>
          <div className='columns large-centered large-12  medium-12'>
            <div className='form'>
              <div className='container'>
                <form action='' onSubmit={this.submitInfo} data-abide>
                  <div className='student-form__container'>
                    <RegistrationInfo edit={edit} handleChange={updateSchool('RegistrationInfo')} {...school.RegistrationInfo} />
                    <br>
                    </br>
                    <br>
                    </br>
                    <br>
                    </br>
                      <div className='row'>
                       <div className='small-8 small-offset-2 columns'>
                          <div className="small-4 columns">
                            <button className='button expanded' type='reset' value='Reset'>Reset</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                          </div>
                           <div className="small-4 columns">
                            <button className='button expanded' type='submit'>Save</button>
                           </div>
                        </div>
                      </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    )

  }
}
