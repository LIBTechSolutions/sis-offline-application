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

    this.viewDoc = this.viewDoc.bind(this)
    this.updateDoc = this.updateDoc.bind(this)
    this.updateState = this.updateState.bind(this)
    this.clearCurrentDoc = this.clearCurrentDoc.bind(this)
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

  updateState (stateUpdates) {
    this.setState((prevState, props) => {
      return update(prevState, {doc: stateUpdates})
    })
  }

  clearCurrentDoc () {
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
            updateDoc={this.updateDoc}
            updateState={this.updateState}
            clearCurrentDoc={this.clearCurrentDoc}
            {...this.state}
            {...this.props} />
        </div>
    )
  }
}
