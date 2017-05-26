'use strict'

import React from 'react'
import RegistrationInfo from 'RegistrationInfo'

export default class RegistrationForm extends React.Component {
  constructor (props) {
    super(props)
    this.submitInfo = this.submitInfo.bind(this)
    this.schoolDb = this.props.schoolDb
  }


  submitInfo (event) {
    event.preventDefault()

    let schoolData = Object.assign({}, this.props.schoolInfo)

    if (!schoolData._id) {
      schoolData._id = schoolData.id
    }

    console.log('About to post to pouch...', schoolData._id)

    // Save to pouchdb
    this.schoolDb.put(schoolData, (err, result) => {
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
      schoolInfo,
      edit,
      updateDoc,
      updateState
    } = this.props
    return (
      <div className='student-form'>
        <form action='' onSubmit={this.submitInfo}>
          <div className='student-form__container'>
          <RegistrationInfo edit={edit} handleChange={updateDoc('RegistrationInfo')} {...schoolInfo.RegistrationInfo} />
          <button className='button expanded' type='submit'>Save</button>
          </div>
        </form>
      </div>
    )
  }
}
