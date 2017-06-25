import { toDateString, generateId } from './utils'
import { toIndexableString } from 'pouchdb-collate'
import uuid from 'uuid/v4'


export function getSchoolInfo ({user}) {

  return {
    id: uuid(),
    user: user.user,
    created: new Date().getTime(),
    regID: generateId(),
    registrationInfo: {
      registrationtype: '',
      firstname: '',
      middlename: '',
      lastname: '',
      dob: '',
      nationality: '',
      sex: '',
      email: '',
      phone: '',
      emcontactname: '',
      emcontactnum: '',
      prevschool: '',
      currentClass: '',
      parentguardian: '',
      parentguardianphone: '',
      Position: '',
      qualification: '',
      experience: '',
      license: '',
      subject: '',
      gradeeleven: ''
    },
    gradeInfo: {
      studentID: '',
      semester: '',
      period: '',
      math: '',
      english: '',
      biology: '',
      literature: '',
      chemistry: '',
      physics: '',
      history: '',
      geography: '',
      economics: '',
      french: '',
      rotc: '',
      religiousEducatin: ''
    },
    feeInfo: {
     semester: '',
     period: '',
     class: '',
     amount: ''
    }
  }
}


export function getIDSRId (schoolDetail) {
  const info = schoolDetail.registrationInfo
  return `${info.currentClass} - ${info.Position} - ${info.sex}`
}


export function getId (schoolDetail) {
  return schoolDetail.id
}


export function completeInfo (schoolDetail) {
  if (!schoolDetail._id) {
    schoolDetail._id = getId(schoolDetail)
  }

  schoolDetail.registrationInfo.idsrId = getIDSRId(schoolDetail)
  schoolDetail.complete = true

  return schoolDetail
}
