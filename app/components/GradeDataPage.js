import React from 'react'
import GradeDataList from 'GradeDataList'

export default function GradeDataPage (props) {
  const complete = props.schoolDetails.filter(schoolDetail => !!schoolDetail.complete)
  const incomplete = props.schoolDetails.filter(schoolDetail => !schoolDetail.complete)
  return (
    <div className='eidsr-data'>
      <div className='eidsr-data__container'>
        <hr />
        <h4>Registered Students</h4>
        <GradeDataList limit={20} docs={complete} {...props} />
      </div>
    </div>
  )
}
