'use strict'

import React from 'react'
import update from 'immutability-helper'
import uuid from 'uuid/v4'
import {toDate} from '../utils'
import GradeForm from 'GradeForm'



export default class Grade extends React.Component {
  constructor (props) {
    super(props)

    this.newGrade = {
      id: uuid(),
      createdAt: toDate(),
      GradeInfo: {
        studentID: '',
        semester: '',
        period: '',
        math: '',
        english: '',
        biology: '',
        literature: '',
        chemistry: '',
        physics: '',
        history: '',
        geography: '',
        economics: '',
        french: '',
        rotc: '',
        religious: ''
      }
  }

  this.state = {
    doc: this.newGrade,
    edit: false
  }
    this.viewGrade = this.viewGrade.bind(this)
    this.updateGrade = this.updateGrade.bind(this)
    this.updateGradeState = this.updateGradeState.bind(this)
    this.clearCurrentGrade = this.clearCurrentGrade.bind(this)
}

viewGrade (doc) {
  return (e) => this.setState({doc, edit: false})
}

updateGrade (section) {
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

updateGradeState (stateUpdates) {
  this.setState((prevState, props) => {
    return update(prevState, {doc: stateUpdates})
  })
}

clearCurrentGrade () {
    window.scrollTo(0, 0)
    this.setState({
      doc: this.newGrade,
      edit: true,
      newInfo: true,
      view: 'split-view'
    })
  }


  render () {
    return (
        <div id='register' className='register'>
        <GradeForm
            updateGrade={this.updateGrade}
            updateGradeState={this.updateGradeState}
            clearCurrentGrade={this.clearCurrentGrade}
            {...this.state}
            {...this.props} />
        </div>
    )
  }
}
