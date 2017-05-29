'use strict'

import React from 'react'
import update from 'immutability-helper'
import uuid from 'uuid/v4'
import {toDate} from '../utils'
import RegistrationForm from 'RegistrationForm'



export default class Registration extends React.Component {
  constructor (props) {
    super(props)
    this.newReg = {
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
      doc: this.newReg,
      edit: false
    }
    this.updateDoc = this.updateDoc.bind(this)
    this.updateState = this.updateState.bind(this)
    this.clearCurrentDoc = this.clearCurrentDoc.bind(this)
    this.viewDoc = this.viewDoc.bind(this)

  }

viewDoc (doc) {
  return (e) => this.setState({doc, edit: false})
}


updateDoc (section) {
  return (dependentProps) => {
    return (e) => {
      let key = e.target.name
      let value = e.target.type === 'checkbox'
                ? e.target.checked
                : e.target.value

      this.setState((prevState, props) => {
        let doc = {}
        doc[section] = {}
        doc[section][key] = {$set: value}

        for (let prop in dependentProps) {
          doc[section][prop] = {$set: dependentProps[prop][value]}
        }
        return update(prevState, {doc})
      })
    }
  }
}

toggleEdit () {
    this.setState((prevState, props) => { return {edit: !prevState.edit} })
  }

updateState (stateUpdates) {
  this.setState((prevState, props) => {
    return update(prevState, {doc: stateUpdates})
  })
}

clearCurrentDoc () {
    window.scrollTo(0, 0)
    this.setState({
      doc: this.newReg,
      edit: true,
      newInfo: true,
      view: 'split-view'
    })
  }


  render () {
    return (
        <div id='register' className='register'>
        <RegistrationForm
            viewDoc={this.viewDoc}
            toggleEdit={this.toggleEdit}
            updateDoc={this.updateDoc}
            updateState={this.updateState}
            clearCurrentDoc={this.clearCurrentDoc}
            {...this.state}
            {...this.props} />
        </div>
    )
  }
}
