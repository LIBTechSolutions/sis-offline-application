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

    let regInfo = Object.assign({}, this.props.school)

    if (!regInfo._id) {
      regInfo._id = regInfo.id
    }

    console.log('About to post to pouch...', regInfo._id)

    // Save to pouchdb
    this.schoolDb.put(regInfo, (err, result) => {
      if (!err) {
        console.log('Successfully posted to pouchdb!')
        this.props.clearCurrentSchool()
      } else {
        console.log('Error saving to pouch...')
        console.log(err)
      }
    })
  }




  render () {
    let {
      school,
      edit,
      updateSchool,
      updateState
    } = this.props
    return (
      <div className='student-form'>
        <form action='' onSubmit={this.submitInfo}>
          <div className='student-form__container'>
          <RegistrationInfo edit={edit} handleChange={updateSchool('RegistrationInfo')} {...school.RegistrationInfo} />
          <button className='button expanded' type='submit'>Save</button>
          </div>
        </form>
      </div>
    )
  }
}
