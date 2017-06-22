import React, {Component} from 'react'

export default class Toolbar extends Component {
  render () {
    let {edit, clearCurrentDoc, toggleEdit, closeWindow, canSubmit} = this.props

    return (
      <div className='eidsr-form__header'>
        <div className='eidsr-form__actions'>
          <button className='button' type='button' onClick={clearCurrentDoc}>New</button>
          <button className='button' type='button' onClick={toggleEdit}>{edit ? 'View' : 'Edit'}</button>
          <button className='button' type='submit' disabled={!edit && !canSubmit} onClick={closeWindow}>Save</button>
          <button className='button' type='button' onClick={closeWindow}>Close</button>
        </div>
      </div>
    )
  }
}
