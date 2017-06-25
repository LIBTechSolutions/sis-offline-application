import React from 'react'
import RegistrationDataList from 'RegistrationDataList'

export default function RegistrationDataPage (props) {
  const complete = props.schoolDetails.filter(schoolDetail => schoolDetail)
  const incomplete = props.schoolDetails.filter(schoolDetail => !schoolDetail.complete)
  return (
    <div className='eidsr-data'>
      <div className='toolbar'>
        <button className='btn' type='button' onClick={props.createCase}><i className='icon-add' />New Registration</button>
      </div>
      <div className='eidsr-data__container'>
        <hr />
        <h4>Registered Students</h4>
        <RegistrationDataList limit={20} docs={complete} {...props} />
      </div>
    </div>
  )
}
