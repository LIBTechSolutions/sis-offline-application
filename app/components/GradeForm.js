'use strict'

import React from 'react'
import GradeInfo from 'GradeInfo'


export default class GradeForm extends React.Component {
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
      updateState,
    } = this.props
    return (
      <div className='row'>
        <div className='columns large-centered large-12  medium-12'>
          <div className='form'>
            <div className='container'>
        <form action='' onSubmit={this.submitInfo}>
          <div className='student-form__container'>
          <GradeInfo edit={edit} handleChange={updateDoc('GradeInfo')} {...schoolInfo.GradeInfo} />
          <button className='button expanded' type='submit'>Save</button>
          </div>
        </form>
        </div>
        </div>
        </div>
      </div>
    )
  }
}
