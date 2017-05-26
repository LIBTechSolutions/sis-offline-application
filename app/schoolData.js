'use strict'

import uuid from 'uuid/v4'
import {toDate} from './utils'

export function SchoolData () {
  return {
  id: uuid(),
  createdAt: toDate(),
  RegistrationInfo: {
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
    'Current Class': '',
    parentguardian: '',
    parentguardianphone: '',
    Position: '',
    qualification: '',
    experience: '',
    license: '',
    subject: '',
    gradeeleven: ''
  },
  GradeInfo: {
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
    religious: ''
  },
  FeesInfo: {
    semester: '',
    period: '',
    class: '',
    amount: ''
  }
 }
}
