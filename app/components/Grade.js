'use strict'

import React from 'react'
import update from 'immutability-helper'
import uuid from 'uuid/v4'
import {toDate} from '../utils'
import GradeForm from 'GradeForm'
import GradeData from 'GradeDataPage'
import classnames from 'classnames'
import {getSchoolInfo} from '../schoolData'


export default class Grade extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      doc: getSchoolInfo(this.props),
      edit: false,
      view: 'full-view'
    }

    this.viewDoc = this.viewDoc.bind(this)
    this.updateDoc = this.updateDoc.bind(this)
    this.updateState = this.updateState.bind(this)
    this.clearCurrentDoc = this.clearCurrentDoc.bind(this)
    this.addFee = this.addFee.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
    this.closeWindow = this.closeWindow.bind(this)
  }


  viewDoc (doc) {
    return (e) => this.setState({
      doc,
      edit: false,
      view: 'split-view'
    })
  }

  toggleEdit () {
      this.setState((prevState, props) => { return {edit: !prevState.edit} })
    }

  addFee () {
    this.setState({
      doc: getSchoolInfo(this.props),
      edit: true,
      view: 'split-view'
    })
  }

  updateDoc (dependentProps) {
      return (e) => {
        let key = e.target.name
        let value = e.target.type === 'checkbox'
                  ? e.target.checked
                  : e.target.value

        this.setState((prevState, props) => {
          let doc = {
            gradeInfo: {
              [key]: {$set: value}
            }
          }

          if (typeof dependentProps === 'function') {
            let calculatedProps = dependentProps(value)
            for (let prop in calculatedProps) {
              doc.gradeInfo[prop] = {$set: calculatedProps[prop]}
            }
          } else {
            for (let prop in dependentProps) {
              doc.gradeInfo[prop] = {$set: dependentProps[prop](value)}
            }
          }

          return update(prevState, {doc, hasChanged: {$set: true}})
        })
      }
    }

  updateState (stateUpdates) {
    this.setState((prevState, props) => {
      return update(prevState, {doc: stateUpdates})
    })
  }

  clearCurrentDoc () {
      this.setState({
        doc: getSchoolInfo(this.props),
        edit: true
      })
    }

    closeWindow () {
        this.setState({
          view: 'full-view'
        })
      }

  render () {
    let registerClass = classnames('register', this.state.view)
    return (
        <div id='register' className={registerClass}>
          <div className='addheader'>
            <div className='large-12 columns'>
              <h3 className='addtitle'><button className='button addtitle' type='button' onClick={this.addFee} disabled={this.state.view === 'split-view'}><i className="fi-add"></i>Add Grade</button></h3>
            </div>
          </div>
        <GradeData
            viewDoc={this.viewDoc}
            {...this.props}
            />
        <GradeForm
            updateDoc={this.updateDoc}
            updateState={this.updateState}
            clearCurrentDoc={this.clearCurrentDoc}
            toggleEdit={this.toggleEdit}
            closeWindow={this.closeWindow}
            {...this.state}
            {...this.props} />
        </div>
    )
  }
}
