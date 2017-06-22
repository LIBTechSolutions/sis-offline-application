'use strict'

import React from 'react'
import RegistrationInfo from 'RegistrationInfo'
import Toolbar from 'Toolbar'

export default class RegistrationForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {canSubmit: false}
    this.submitInfo = this.submitInfo.bind(this)
    this.localdb = this.props.localdb
  }


  submitInfo (event) {
    event.preventDefault()

    let schoolData = Object.assign({}, this.props.doc)

    if (!schoolData._id) {
      schoolData._id = schoolData.id
    }

    console.log('About to post to pouch...', schoolData._id)

    // Save to pouchdb
    this.localdb.put(schoolData, (err, result) => {
      if (!err) {
        console.log('Successfully posted to pouchdb!')
        this.props.clearCurrentDoc()
      } else {
        console.log('Error saving to pouch...')
        console.log(err)
      }
    })
  }




  render () {
    let {
      user,
      doc,
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
        <form action='' onSubmit={this.submitInfo}>
          <div className='student-form__container'>
          <RegistrationInfo edit={edit} handleChange={updateDoc} {...doc.registrationInfo} user={user} />
            <Toolbar edit={edit} clearCurrentDoc={clearCurrentDoc} toggleEdit={toggleEdit} closeWindow={closeWindow} canSubmit={this.state.canSubmit} />
          </div>
        </form>
      </div>
      </div>
    )
  }
}
