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

    let feeInfo = Object.assign({}, this.props.doc)

    if (!feeInfo._id) {
      feeInfo._id = feeInfo.id
    }

    console.log('About to post to pouch...', feeInfo._id)

    // Save to pouchdb
    this.localdb.put(feeInfo, (err, result) => {
      if (!err) {
        console.log('Successfully posted to pouchdb!')
        this.props.clearCurrentDoc()
      } else {
        console.log('Error saving to pouch...')
        console.log(err)
      }
    })
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
          <FeesInfo edit={edit} handleChange={updateDoc} {...doc.feeInfo} user={user}/>
          <Toolbar edit={edit} clearCurrentDoc={clearCurrentDoc} toggleEdit={toggleEdit} closeWindow={closeWindow} canSubmit={this.state.canSubmit} />
          </div>
        </form>
      </div>
      </div>
    )
  }
}
