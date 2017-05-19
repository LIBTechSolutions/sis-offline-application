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
    fee: this.newFee,
    edit: false
  }
    this.viewFee = this.viewFee.bind(this)
    this.updateFee = this.updateFee.bind(this)
    this.updateFeeState = this.updateFeeState.bind(this)
    this.clearCurrentFee = this.clearCurrentFee.bind(this)
}

viewFee (fee) {
  return (e) => this.setState({fee, edit: false})
}

updateFee (section) {
  return (dependentProps) => {
    return (e) => {
      let key = e.target.name
      let value = e.target.type === 'checkbox'
                ? e.target.checked
                : e.target.value

      this.setState((prevState, props) => {
        let fee = {}
        fee[section] = {}
        fee[section][key] = {$set: value}

        for (let prop in dependentProps) {
          fee[section][prop] = {$set: dependentProps[prop][value]}
        }
        return update(prevState, {fee})
      })
    }
  }
}

updateFeeState (stateUpdates) {
  this.setState((prevState, props) => {
    return update(prevState, {fee: stateUpdates})
  })
}

clearCurrentFee () {
    window.scrollTo(0, 0)
    this.setState({
      fee: this.newFee,
      edit: true,
      newInfo: true,
      view: 'split-view'
    })
  }


  render () {
    return (
        <div id='register' className='register'>
        <FeesForm
            updateFee={this.updateFee}
            updateFeeState={this.updateFeeState}
            clearCurrentFee={this.clearCurrentFee}
            {...this.state}
            {...this.props} />
        </div>
    )
  }
}
