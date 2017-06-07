'use strict'

import React from 'react'
import FeesInfo from 'FeesInfo'
import {setUsers, getUsers, filterUsers} from 'UsersApi'
import UserList from 'UserList'

export default class FeesForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      fee: getUsers()
    }
    this.submitInfo = this.submitInfo.bind(this)
  }
  componentDidUpdate () {
    setUsers(this.state.fee)
  }

  submitInfo (event) {
    event.preventDefault()
    let feeInfo = Object.assign({}, this.props.fee)

    this.setState({
      fee: [
        ...this.state.fee,
        {feeInfo}
      ]

    })
    this.props.clearCurrentFee()
  }



  render () {
    let {
      fee,
      edit,
      updateFee,
      updateFeeState,
    } = this.props
    return (
      <div className='well'>
        <div className='row'>
          <div className='student-form'>
            <div className='columns small-centered medium-8  large-8'>
              <div className='form'>
                <div className='container'>
                  <form action='' onSubmit={this.submitInfo}>
                    <div className='student-form__container'>
                      <FeesInfo edit={edit} handleChange={updateFee('FeesInfo')} {...fee.FeesInfo} />
                      <br>
                      </br>
                      <br>
                      </br>
                      <br>
                      </br>
                        <div className='row'>
                         <div className='small-8 small-offset-2 columns'>
                            <div className="small-4 columns">
                              <button className='button expanded' type='reset' value='Reset'>Reset</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </div>
                             <div className="small-4 columns">
                              <button className='button expanded' type='submit'>Save</button>
                             </div>
                          </div>
                        </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}
