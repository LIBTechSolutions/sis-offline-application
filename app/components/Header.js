'use strict'

import React from 'react'
import Registration from 'Registration'
import Fees from 'Fees'
import Grade from 'Grade'
import GradeData from 'GradeDataPage'


export default class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      registration: false,
      fee: false,
      grade: false,
      gradedata: false
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleFee = this.handleFee.bind(this)
    this.handleGrade = this.handleGrade.bind(this)
    this.handleGradeData = this.handleGradeData.bind(this)
  }

  handleFee () {
    this.setState({
      fee: true,
      registration: false,
      grade: false
    })
  }
  handleClick () {
    this.setState({
      registration: true,
      fee: false,
      grade: false
    })
  }
  handleGrade () {
    this.setState({
      grade: true,
      registration: false,
      fee: false
    })
  }
  handleGradeData () {
    this.setState({
      gradedata: true
    })
  }


  render () {

    return (
      <div>
      <div className='top-bar'>
            <div className='top-bar-left'>
              <ul className='menu'>
                <li className='menu-text'>SIS Offline Application</li>
                <li>
                	<ul className='dropdown menu' data-dropdown-menu>
    				  <li>
    				    <button className='button' type='button'>Create</button>
    				    <ul className='menu'>
    				      <li><button className='button' type='button' onClick={this.handleClick}>Registration Info</button></li>
    				      <li><button className='button' type='button' onClick={this.handleFee}>Fee Info</button></li>
    				      <li><button className='button' type='button' onClick={this.handleGrade}>Grade Info</button></li>
    				    </ul>
    				  </li>
    				</ul>
    			</li>
    			<li className='menu-text'></li>
    			<li>
                	<ul className='dropdown menu' data-dropdown-menu>
    				  <li>
    				    <button className='button' type='button'>View</button>
    				    <ul className='menu'>
    				      <li><button className='button' type='button'>Registration</button></li>
    				      <li><button className='button' type='button'>Fee</button></li>
    				      <li><button className='button' type='button' onClick={this.handleGradeData}>Grade</button></li>
    				    </ul>
    				  </li>
    				</ul>
    			</li>
    		    </ul>
      		</div>
      </div>
      <div className='school-data'>
        {this.state.registration ? <Registration schoolDb={this.schoolDb} {...this.props}/>: null}
        {this.state.fee ? <Fees schoolDb={this.schoolDb} {...this.props}/>: null}
        {this.state.grade ? <Grade schoolDb={this.schoolDb} {...this.props}/>: null}
        {this.state.gradedata ? <GradeData schoolDb={this.schoolDb} viewGrade={this.viewGrade} {...this.props}/>: null}
      </div>
    </div>
    )
  }
}
