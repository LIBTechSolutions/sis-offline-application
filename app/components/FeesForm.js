'use strict'

import React from 'react'
import FeesInfo from 'FeesInfo'

export default class FeesForm extends React.Component {
  constructor (props) {
    super(props)
    this.submitInfo = this.submitInfo.bind(this)
    this.schoolDb = this.props.schoolDb
  }

  submitInfo (event) {
    event.preventDefault()

    let feeInfo = Object.assign({}, this.props.fee)

    if (!feeInfo._id) {
      feeInfo._id = feeInfo.id
    }

    console.log('About to post to pouch...', feeInfo._id)

    // Save to pouchdb
    this.schoolDb.put(feeInfo, (err, result) => {
      if (!err) {
        console.log('Successfully posted to pouchdb!')
        this.props.clearCurrentFee()
      } else {
        console.log('Error saving to pouch...')
        console.log(err)
      }
    })
  }



  render () {
    let {
      fee,
      edit,
      updateFee,
      updateFeeState,
    } = this.props
    return (
      <div className='student-form'>
        <form action='' onSubmit={this.submitInfo}>
          <div className='student-form__container'>
          <FeesInfo edit={edit} handleChange={updateFee('FeesInfo')} {...fee.FeesInfo} />
          <button className='button expanded' type='submit'>Save</button>
          </div>
        </form>
      </div>
    )
  }
}
