'use strict'

import React from 'react'
import GradeInfo from 'GradeInfo'
import {setUsers, getUsers, filterUsers} from 'UsersApi'
import UserList from 'UserList'

export default class GradeForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      grade: getUsers()
    }
    this.submitInfo = this.submitInfo.bind(this)
  }
  componentDidUpdate () {
    setUsers(this.state.grade)
  }

  submitInfo (event) {
    event.preventDefault()
    let gradeInfo = Object.assign({}, this.props.grade)

    this.setState({
      grade: [
        ...this.state.grade,
        {gradeInfo}
      ]

    })
    this.props.clearCurrentGrade()
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
    )
  }
}
