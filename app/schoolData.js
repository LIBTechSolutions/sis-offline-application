'use strict'

import uuid from 'uuid/v4'
import {toDate} from './utils'

export function getSchoolInfo ({user}) {
  return {
    id: uuid(),
    user: user.user,
    created: toDate(),
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
