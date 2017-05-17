'use strict'

import React, {Component} from 'react'
import Select from 'Select'
import config from '../../conf.json'

const PhoneNumberPattern = '^(?:\\+\\d{1,3})?\\d{4}[ -]?\\d{3}[ -]?\\d{3}$'

export default class RegistrationInfo extends Component {
  constructor (props) {
    super(props)

  }

getPositions () {
    let positions = config.staff_positions
    return Object.keys(positions.staffs)
  }

getClasses () {
    let grade = config.staff_positions
    return Object.keys(grade.grades)
  }


  render () {
    let props = this.props
    let {edit} = props
    let handleChange = props.handleChange()
    return (
      <fieldset>
      <legend>Registration Form</legend>

              <label>
              <input name='registrationtype'
                  value={'Student'}
                  type='radio'
                  checked={props.registrationtype === 'Student'}
                  key={1}
                  onChange={handleChange}
                  required
                />
                Student
                </label>
                <label>
                <input name='registrationtype'
                    value={'Faculty'}
                    type='radio'
                    checked={props.registrationtype === 'Faculty'}
                    key={2}
                    onChange={handleChange}
                    required
                  />
                  Faculty
                  </label>

              <input name='firstname'
                value={props['firstname']}
                type='text'
                placeholder='First Name'
                onChange={handleChange}
              />
            <input name='middlename'
                value={props['middlename']}
                type='text'
                placeholder='Middle Name'
                onChange={handleChange}
              />
            <input name='lastname'
                value={props['lastname']}
                type='text'
                placeholder='Last Name'
                onChange={handleChange}
              />

                  <input name='dob'
                      value={props['dob']}
                      type='date'
                      placeholder='Date of Birth'
                      onChange={handleChange}
                    />

                    <input name='nationality'
                        value={props['nationality']}
                        type='text'
                        placeholder='Nationality'
                        onChange={handleChange}
                      />

                    <label>
                    <input name='sex'
                        value={'Male'}
                        type='radio'
                        checked={props.sex === 'Male'}
                        key={1}
                        onChange={handleChange}
                        required
                      />
                        Male
                      </label>

                  <label>
                  <input name='sex'
                      value={'Female'}
                      type='radio'
                      checked={props.sex === 'Female'}
                      key={2}
                      onChange={handleChange}
                      required
                    />
                    Female
                  </label>

                    <input name='email'
                        value={props['email']}
                        type='email'
                        placeholder='Email'
                        onChange={handleChange}
                      />

                    <input name='phone'
                        value={props['phone']}
                        type='tel'
                        pattern={PhoneNumberPattern}
                        placeholder='Phone Number'
                        onChange={handleChange}
                      />

                    <input name='emcontactname'
                        value={props['emcontactname']}
                        type='text'
                        placeholder='Emergency contact name'
                        onChange={handleChange}
                      />

                    <input name='emcontactnum'
                        value={props['emcontactnum']}
                        type='tel'
                        pattern={PhoneNumberPattern}
                        placeholder='Emergency contact number'
                        onChange={handleChange}
                      />


                  <input name='prevschool'
                      value={props['prevschool']}
                      type='text'
                      placeholder='Previous School'
                      onChange={handleChange}
                    />

                  <Select name='Current Class'
                      onChange={handleChange}
                      value={props['Current Class']}
                      options={this.getClasses()}
                      required />

                    <input name='parentguardian'
                        value={props['parentguardian']}
                        type='text'
                        placeholder='Parent / Guardian Name'
                        onChange={handleChange}
                      />

                    <input name='parentguardianphone'
                        value={props['parentguardianphone']}
                        type='tel'
                        placeholder='Parent / Guardian Phone'
                        pattern={PhoneNumberPattern}
                        onChange={handleChange}
                      />

                    <Select name='Position'
                      onChange={handleChange}
                      value={props['Position']}
                      options={this.getPositions()}
                      required />

                    <input name='qualification'
                        value={props['qualification']}
                        type='text'
                        placeholder='Qualification'
                        onChange={handleChange}
                      />

                    <input name='experience'
                        value={props['experience']}
                        type='number'
                        placeholder='Years of Experience'
                        onChange={handleChange}
                      />

                    <input name='license'
                        value={props['license']}
                        type='text'
                        placeholder='Teacher License'
                        onChange={handleChange}
                      />
            </fieldset>

    )
  }

}
