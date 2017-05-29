'use strict'

import React from 'react'
import Registration from 'Registration'
import Fees from 'Fees'
import Grade from 'Grade'
import GradeData from 'GradeDataPage'
import FeeData from 'FeeDataPage'
import RegistrationData from 'RegistrationDataPage'


export default class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      registration: false,
      fee: false,
      grade: false,
      gradedata: false,
      registrationdata: false,
      feedata: false,
      doc: this.props.doc
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleFee = this.handleFee.bind(this)
    this.handleGrade = this.handleGrade.bind(this)
    this.handleGradeData = this.handleGradeData.bind(this)
    this.handleFeeData = this.handleFeeData.bind(this)
    this.handleRegistrationData = this.handleRegistrationData.bind(this)
    this.viewDoc = this.viewDoc.bind(this)
  }

  viewDoc (doc) {
    return (e) => this.setState({doc, edit: false})
  }

  handleFee () {
    this.setState({
      fee: true,
      registration: false,
      grade: false,
      gradedata: false,
      registrationdata: false,
      feedata: false
    })
  }
  handleClick () {
    this.setState({
      registration: true,
      fee: false,
      grade: false,
      gradedata: false,
      registrationdata: false,
      feedata: false
    })
  }
  handleGrade () {
    this.setState({
      grade: true,
      registration: false,
      fee: false,
      gradedata: false,
      registrationdata: false,
      feedata: false
    })
  }
  handleGradeData () {
    this.setState({
      gradedata: true,
      fee: false,
      registration: false,
      grade: false,
      registrationdata: false,
      feedata: false
    })
  }
  handleRegistrationData () {
    this.setState({
      registrationdata: true,
      gradedata: false,
      fee: false,
      registration: false,
      grade: false,
      feedata: false
    })
  }
  handleFeeData () {
    this.setState({
      feedata: true,
      registrationdata: false,
      gradedata: false,
      fee: false,
      registration: false,
      grade: false
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
    				      <li><button className='button' type='button' onClick={this.handleRegistrationData}>Registration</button></li>
    				      <li><button className='button' type='button' onClick={this.handleFeeData}>Fee</button></li>
    				      <li><button className='button' type='button' onClick={this.handleGradeData}>Grade</button></li>
    				    </ul>
    				  </li>
    				</ul>
    			</li>
    		    </ul>
      		</div>
      </div>
      <div className='school-data'>
        {this.state.registration ? <Registration regDb={this.regDb} {...this.props}/>: null}
        {this.state.fee ? <Fees feeDb={this.feeDb} {...this.props}/>: null}
        {this.state.grade ? <Grade gradeDb={this.gradeDb} {...this.props}/>: null}
        {this.state.gradedata ? <GradeData gradeDb={this.gradeDb} viewDoc={this.viewDoc} {...this.props}/>: null}
        {this.state.registrationdata ? <RegistrationData regDb={this.regDb} viewDoc={this.viewDoc} {...this.props}/>: null}
        {this.state.feedata ? <FeeData feeDb={this.feeDb} viewDoc={this.viewDoc} {...this.props}/>: null}
      </div>
    </div>
    )
  }
}
