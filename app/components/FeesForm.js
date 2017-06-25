'use strict'

import React from 'react'
import FeesInfo from 'FeesInfo'
import Toolbar from 'Toolbar'

export default class FeesForm extends React.Component {
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
  canSubmit () {
    return this.form
      ? this.props.edit && this.form.checkValidity()
      : false
  }



  render () {
    let {
      doc,
      user,
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
        <form action='' onSubmit={this.submitInfo} ref={form => {this.form = form}}>
          <div className='student-form__container'>
          <FeesInfo
            edit={edit}
            handleChange={updateDoc}
            user={user}
            {...doc.feeInfo} />
          <Toolbar
            edit={edit}
            isNew={isNew}
            clearCurrentDoc={clearCurrentDoc}
            toggleEdit={toggleEdit}
            closeWindow={closeWindow}
            canSubmit={this.state.canSubmit}
            {...doc.feeInfo} />
          </div>
        </form>
      </div>
      </div>
    )
  }
}
