'use strict'

import React from 'react'
import update from 'immutability-helper'
import uuid from 'uuid/v4'
import {toDate} from '../utils'
import RegistrationForm from 'RegistrationForm'
import {SchoolData} from '../schoolData'



export default class Registration extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      schoolInfo: SchoolData(),
      edit: false
    }
    this.viewDoc = this.viewDoc.bind(this)
    this.updateDoc = this.updateDoc.bind(this)
    this.updateState = this.updateState.bind(this)
    this.clearCurrentDoc = this.clearCurrentDoc.bind(this)

  }





viewDoc (schoolInfo) {
  return (e) => this.setState({schoolInfo, edit: false})
}

updateDoc (section) {
  return (dependentProps) => {
    return (e) => {
      let key = e.target.name
      let value = e.target.type === 'checkbox'
                ? e.target.checked
                : e.target.value

      this.setState((prevState, props) => {
        let schoolInfo = {}
        schoolInfo[section] = {}
        schoolInfo[section][key] = {$set: value}

        for (let prop in dependentProps) {
          schoolInfo[section][prop] = {$set: dependentProps[prop][value]}
        }
        return update(prevState, {schoolInfo})
      })
    }
  }
}

updateState (stateUpdates) {
  this.setState((prevState, props) => {
    return update(prevState, {schoolInfo: stateUpdates})
  })
}

clearCurrentDoc () {
    window.scrollTo(0, 0)
    this.setState({
      schoolInfo: SchoolData(),
      edit: true,
      newInfo: true,
      view: 'split-view'
    })
  }


  render () {
    return (
        <div id='register' className='register'>
        <RegistrationForm
            updateDoc={this.updateDoc}
            updateState={this.updateState}
            clearCurrentDoc={this.clearCurrentDoc}
            {...this.state}
            {...this.props} />
        </div>
    )
  }
}
