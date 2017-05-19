'use strict'

import React, {Component} from 'react'



export default class SchoolData extends Component {
  render () {
    return (
      <div>
        <p>Hi there</p>
        <button className='button' type='button' onClick={this.props.clearCurrentSchool}>Registration Info</button>
      </div>
    )
  }
}
