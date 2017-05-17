'use strict'

import React from 'react'
import update from 'immutability-helper'
import uuid from 'uuid/v4'
import {toDate} from '../utils'
import RegistrationForm from 'RegistrationForm'



export default class Registration extends React.Component {
  constructor (props) {
    super(props)

    this.newSchool = {
      'id': uuid(),
      'createdAt': toDate(),
      RegistrationInfo: {
        'registrationtype': '',
        'firstname': '',
        'middlename': '',
        'lastname': '',
        'dob': '',
        'nationality': '',
        'sex': '',
        'email': '',
        'phone': '',
        'emcontactname': '',
        'emcontactnum': '',
        'prevschool': '',
        'Current Class': '',
        'parentguardian': '',
        'parentguardianphone': '',
        'Position': '',
        'qualification': '',
        'experience': '',
        'license': '',
        'subject': '',
        'gradeeleven': ''
    }
  }

  this.state = {
    school: this.newSchool,
    edit: false
  }
    this.viewSchool = this.viewSchool.bind(this)
    this.updateSchool = this.updateSchool.bind(this)
    this.updateState = this.updateState.bind(this)
    this.clearCurrentSchool = this.clearCurrentSchool.bind(this)
}

viewSchool (school) {
  return (e) => this.setState({school, edit: false})
}

updateSchool (section) {
  return (dependentProps) => {
    return (e) => {
      let key = e.target.name
      let value = e.target.type === 'checkbox'
                ? e.target.checked
                : e.target.value

      this.setState((prevState, props) => {
        let school = {}
        school[section] = {}
        school[section][key] = {$set: value}

        for (let prop in dependentProps) {
          school[section][prop] = {$set: dependentProps[prop][value]}
        }
        return update(prevState, {school})
      })
    }
  }
}

updateState (stateUpdates) {
  this.setState((prevState, props) => {
    return update(prevState, {school: stateUpdates})
  })
}

clearCurrentSchool () {
    window.scrollTo(0, 0)
    this.setState({
      school: this.newSchool,
      edit: true,
      newInfo: true,
      view: 'split-view'
    })
  }


  render () {
    return (
        <div id='register' className='register'>
        <RegistrationForm
            updateSchool={this.updateSchool}
            updateState={this.updateState}
            clearCurrentSchool={this.clearCurrentSchool}
            {...this.state}
            {...this.props} />
        </div>
    )
  }
}
