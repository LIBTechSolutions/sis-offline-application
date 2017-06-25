'use strict'

import React from 'react'
import update from 'immutability-helper'
import FeesForm from 'FeesForm'
import FeeData from 'FeeDataPage'
import classnames from 'classnames'
import {completeInfo, getSchoolInfo} from '../schoolData'



export default class Fees extends React.Component {
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
    this.saveInfo = this.saveInfo.bind(this)
}

viewDoc (doc) {
  return (e) => this.setState({
    doc,
    isNew: false,
    edit: false,
    hasChanged: false,
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
    isNew: true,
    hasChanged: false,
    view: 'split-view'
  })
}

saveInfo (doc) {
    let action = this.state.isNew
      ? this.props.actions.insertInfo
      : this.props.actions.updateInfo

    action(doc)

    this.setState({
      doc,
      hasChanged: false,
      edit: false
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
            feeInfo: {
              [key]: {$set: value}
            }
          }

          for (let prop in dependentProps) {
            doc.feeInfo[prop] = {$set: dependentProps[prop](value)}
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
              <h3 className='addtitle'><button className='button addtitle' type='button' onClick={this.addFee} disabled={this.state.view === 'split-view'}><i className="fi-add"></i>Add Fee</button></h3>
            </div>
          </div>
        <FeeData
            viewDoc={this.viewDoc}
            selectedDetail={this.state.doc}
            {...this.props}
            />
        <FeesForm
            updateDoc={this.updateDoc}
            updateState={this.updateState}
            clearCurrentDoc={this.clearCurrentDoc}
            toggleEdit={this.toggleEdit}
            closeWindow={this.closeWindow}
            saveInfo={this.saveInfo}
            isNew={this.state.isNew}
            hasChanged={this.state.hasChanged}
            completeInfo={completeInfo}
            {...this.state}
            {...this.props} />
        </div>
    )
  }
}
