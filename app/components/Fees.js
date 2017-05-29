'use strict'

import React from 'react'
import update from 'immutability-helper'
import uuid from 'uuid/v4'
import {toDate} from '../utils'
import FeesForm from 'FeesForm'



export default class Fees extends React.Component {
  constructor (props) {
    super(props)

    this.newFee = {
      id: uuid(),
      createdAt: toDate(),
      FeesInfo: {
        semester: '',
        period: '',
        class: '',
        amount: ''
      }
  }

  this.state = {
    doc: this.newFee,
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
      doc: this.newFee,
      edit: true,
      newInfo: true,
      view: 'split-view'
    })
  }


  render () {
    return (
        <div id='register' className='register'>
        <FeesForm
            updateDoc={this.updateDoc}
            updateState={this.updateState}
            clearCurrentDoc={this.clearCurrentDoc}
            {...this.state}
            {...this.props} />
        </div>
    )
  }
}
