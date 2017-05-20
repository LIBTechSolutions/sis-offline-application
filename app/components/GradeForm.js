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

    let gradeInfo = Object.assign({}, this.props.grade)

    if (!gradeInfo._id) {
      gradeInfo._id = gradeInfo.id
    }

    console.log('About to post to pouch...', gradeInfo._id)

    // Save to pouchdb
    this.schoolDb.put(gradeInfo, (err, result) => {
      if (!err) {
        console.log('Successfully posted to pouchdb!')
        this.props.clearCurrentGrade()
      } else {
        console.log('Error saving to pouch...')
        console.log(err)
      }
    })
  }



  render () {
    let {
      grade,
      edit,
      updateGrade,
      updateGradeState,
    } = this.props
    return (
      <div className='row'>
        <div className='columns large-centered large-12  medium-12'>
          <div className='form'>
            <div className='container'>
        <form action='' onSubmit={this.submitInfo}>
          <div className='student-form__container'>
          <GradeInfo edit={edit} handleChange={updateGrade('GradeInfo')} {...grade.GradeInfo} />
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
