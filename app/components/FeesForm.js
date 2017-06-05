'use strict'

import React from 'react'
import FeesInfo from 'FeesInfo'

export default class FeesForm extends React.Component {
  constructor (props) {
    super(props)
    this.submitInfo = this.submitInfo.bind(this)
    this.feeDb = this.props.feeDb
  }

  submitInfo (event) {
    event.preventDefault()

    let feeInfo = Object.assign({}, this.props.doc)

    if (!feeInfo._id) {
      feeInfo._id = feeInfo.id
    }

    console.log('About to post to pouch...', feeInfo._id)

    // Save to pouchdb
    this.feeDb.put(feeInfo, (err, result) => {
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
      doc,
      edit,
      updateDoc,
      updateState,
    } = this.props
    return (
      <div className='student-form'>
        <form action='' onSubmit={this.submitInfo}>
          <div className='student-form__container'>
          <FeesInfo edit={edit} handleChange={updateDoc('FeesInfo')} {...doc.FeesInfo} />
          <button className='button expanded' type='submit'>Save</button>
          </div>
        </form>
      </div>
    )
  }
}
