'use strict'

import React, {Component} from 'react'


export default class FeesInfo extends Component {


  render () {
    let props = this.props
    let {edit} = props
    let handleChange = props.handleChange()
    return (
      <fieldset disabled={!edit}>
      <legend>Fees</legend>

                <input name='semester'
                  value={props['semester']}
                  type='text'
                  placeholder='Enter Semester'
                  onChange={handleChange}
                />
                <input name='period'
                  value={props['period']}
                  type='text'
                  placeholder='Period'
                  onChange={handleChange}
                  required
                />
                <input name='class'
                  value={props['class']}
                  type='text'
                  placeholder='Class'
                  onChange={handleChange}
                />
                <input name='amount'
                  value={props['amount']}
                  type='number'
                  placeholder='Amount paid'
                  onChange={handleChange}
                  required
                />
              </fieldset>

    )
  }

}
