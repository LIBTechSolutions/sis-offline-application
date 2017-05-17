// 'use strict'
//
// import React from 'react'
// import update from 'immutability-helper'
// import uuid from 'uuid/v4'
// import {toDate} from '../utils'
//
//
// export default class SignUp extends React.Component {
//   constructor (props) {
//     super(props)
//
//     this.state = {
//       view: 'full-view'
//     }
//
//     this.newSchool = {
//       id: uuid(),
//       createdAt: toDate(),
//       RegistrationInfo: {
//         name: '',
//         username: '',
//         email: '',
//         phone: '',
//         password: ''
//     },
//     FeesInfo: {
//       semester: '',
//       period: '',
//       class: '',
//       amount: ''
//     }
//   }
//
// }
//
// viewSchool (school) {
//   return (e) => this.setState({school, edit: false})
// }
//
// updateSchool (section) {
//   return (dependentProps) => {
//     return (e) => {
//       let key = e.target.name
//       let value = e.target.type === 'checkbox'
//                 ? e.target.checked
//                 : e.target.value
//
//       this.setState((prevState, props) => {
//         let school = {}
//         school[section] = {}
//         school[section][key] = {$set: value}
//
//         for (let prop in dependentProps) {
//           school[section][prop] = {$set: dependentProps[prop][value]}
//         }
//         return update(prevState, {school})
//       })
//     }
//   }
// }
//
// updateState (stateUpdates) {
//   this.setState((prevState, props) => {
//     return update(prevState, {school: stateUpdates})
//   })
// }
//
// clearCurrentSchool () {
//     window.scrollTo(0, 0)
//     this.setState({
//       school: this.newSchool,
//       edit: true,
//       newInfo: true,
//       view: 'split-view'
//     })
//   }
//
//   /*createNew () {
//     window.scrollTo(0, 0)
//     this.setState({
//       school: this.newSchool,
//       edit: true,
//       view: 'full-view'
//     })
//   }*/
//
//   render () {
//     return (
//
//     )
//   }
// }
