'use strict'

import React from 'react'
import GradeInfo from 'GradeInfo'
import Toolbar from 'Toolbar'


export default class GradeForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {canSubmit: false}
    this.submitInfo = this.submitInfo.bind(this)
    this.localdb = this.props.localdb
  }

  submitInfo (event) {
    event.preventDefault()

    let schoolDetail = Object.assign({}, this.props.doc)
    this.props.completeInfo(schoolDetail)
    this.props.saveInfo(schoolDetail)
  }


  render () {
    let {
      user,
      doc,
      isNew,
      edit,
      updateDoc,
      updateState,
      toggleEdit,
      clearCurrentDoc,
      closeWindow
    } = this.props
    return (
      <div className='student'>
        <div className='student-form'>
          <div>
            <div className='container'>
        <form action='' onSubmit={this.submitInfo}>
          <div className='student-form__container'>
          <GradeInfo
            edit={edit}
            handleChange={updateDoc}
            user={user}
            {...doc.gradeInfo} />
            <Toolbar
              edit={edit}
              isNew={isNew}
              clearCurrentDoc={clearCurrentDoc}
              toggleEdit={toggleEdit}
              closeWindow={closeWindow}
              canSubmit={this.state.canSubmit}
              {...doc.gradeInfo} />
          </div>
        </form>
        </div>
        </div>
        </div>
      </div>
    )
  }
}
