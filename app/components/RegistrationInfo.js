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
      <legend>REGISTRATION FORM</legend>
              <br>
              </br>
            <div className='large-12 medium-12 columns'>
            <label>Registration Type</label>
            <div className='container'>
            <div className='large-4 medium-4 columns'>
            <div className='callout' name='Registration Type'>
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
              </div>
              </div>
            </div>
            </div>

            <div className='large-12  medium-12 columns'>
            <br>
            </br>
            <label>General Information</label>
            <div className='container'>
              <div className='large-4 medium-4 columns'>
              <label>First Name: <small>required</small>
              <input name='firstname'
                value={props['firstname']}
                type='text'
                placeholder='First Name'
                onChange={handleChange}
                required pattern="[a-zA-Z]+"
              />
              </label>
              </div>
            <div className='columns large-4 medium-4'>
            <label>Middle Name:
            <input name='middlename'
                value={props['middlename']}
                type='text'
                placeholder='Middle Name'
                onChange={handleChange}
                required pattern="[a-zA-Z]+"
              />
              </label>
              </div>
            <div className='columns large-4 medium-4'>
            <label>Last Name: <small>required</small>
            <input name='lastname'
                value={props['lastname']}
                type='text'
                placeholder='Last Name'
                onChange={handleChange}
                required pattern="[a-zA-Z]+"
              />
              </label>
              </div>
          </div>

          <div className='columns large-12  medium-12'>
            <div className='columns large-4 medium-4'>
              <label>Date of Birth: <small>required</small>
                  <input name='dob'
                      value={props['dob']}
                      type='date'
                      placeholder='Date of Birth'
                      onChange={handleChange}
                    />
                    </label>
                  </div>
                  <div className='columns large-4 medium-4'>
                    <label>Nationality: <small>required</small>
                    <input name='nationality'
                        value={props['nationality']}
                        type='text'
                        placeholder='Nationality'
                        onChange={handleChange}
                      />
                      </label>
                    </div>
                    <div className='columns large-4 medium-4'>
                      <label>Gender: <small>required</small>
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
                  </label>
                  </div>
                </div>

                <div className='columns large-12  medium-12'>
                  <div className='columns large-8 medium-8'>
                    <label>Email: <small>required</small>
                    <input name='email'
                        value={props['email']}
                        type='email'
                        placeholder='me@example.com'
                        onChange={handleChange}
                        required
                      />
                      </label>
                  </div>
                  <div className='columns large-4 medium-4'>
                    <label>Phone Number: <small>required</small>
                    <input name='phone'
                        value={props['phone']}
                        type='tel'
                        pattern={PhoneNumberPattern}
                        placeholder='xxxx-xxx-xxx'
                        onChange={handleChange}
                        required
                      />
                      </label>
                  </div>
                </div>
              </div>

                <div className='columns large-12  medium-12'>
                <br>
                </br>
                <label>Student Required Information</label>
                <div className='container'>
                  <div className='columns large-4 medium-4'>
                  <label>Emergency Contact Name: <small>required</small>
                    <input name='emcontactname'
                        value={props['emcontactname']}
                        type='text'
                        placeholder='Emergency contact name'
                        onChange={handleChange}
                        required
                      />
                      </label>
                    </div>
                    <div className='columns large-4 medium-4'>
                    <label>Emergency Contact Number: <small>required</small>
                    <input name='emcontactnum'
                        value={props['emcontactnum']}
                        type='tel'
                        pattern={PhoneNumberPattern}
                        placeholder='xxxx-xxx-xxx'
                        onChange={handleChange}
                        required
                      />
                      </label>
                    </div>
                  <div className='columns large-4 medium-4'>
                  <label>Previous School Attended:
                  <input name='prevschool'
                      value={props['prevschool']}
                      type='text'
                      placeholder='Previous School'
                      onChange={handleChange}
                    />
                    </label>
                    </div>
                  </div>
                <div className='columns large-12 medium-12'>
                <div className='columns large-4 medium-4'>
                <label>Select Current class: <small>required</small>
                  <Select name=''
                      onChange={handleChange}
                      value={props['Current Class']}
                      options={this.getClasses()}
                      placeholder='Current Class'
                      required
                      />
                  </label>
                    </div>
                    <div className='columns large-4 medium-4'>
                    <label>Parent/Guardian Name: <small>required</small>
                    <input name='parentguardian'
                        value={props['parentguardian']}
                        type='text'
                        placeholder='Parent / Guardian Name'
                        onChange={handleChange}
                        required
                      />
                      </label>
                    </div>
                    <div className='columns large-4 medium-4'>
                    <label>Parent/Guardian Phone: <small>required</small>
                    <input name='parentguardianphone'
                        value={props['parentguardianphone']}
                        type='tel'
                        placeholder='xxxx-xxx-xxx'
                        pattern={PhoneNumberPattern}
                        onChange={handleChange}
                        required
                      />
                      </label>
                    </div>
                  </div>
                  </div>

                  <div className='columns large-12 medium-12'>
                  <br>
                  </br>
                  <label>Faculty Required Information</label>
                  <div className='container'>
                    <div className='columns large-3 medium-3'>
                    <label>Select Position: <small>required</small>
                      <Select name=''
                      onChange={handleChange}
                      value={props['Position']}
                      options={this.getPositions()}
                      required
                      />
                      </label>
                    </div>
                    <div className='columns large-3 medium-3'>
                    <label>Qualification: <small>required</small>
                    <input name='qualification'
                        value={props['qualification']}
                        type='text'
                        placeholder='Qualification'
                        onChange={handleChange}
                        required
                      />
                      </label>
                    </div>
                    <div className='columns large-3 medium-3'>
                    <label>Years of Experience: <small>required</small>
                    <input name='experience'
                        value={props['experience']}
                        type='number'
                        placeholder='Years of Experience'
                        onChange={handleChange}
                        required
                      />
                      </label>
                    </div>
                    <div className='columns large-3 medium-3'>
                    <label>Teacher License:
                    <input name='license'
                        value={props['license']}
                        type='text'
                        placeholder='Teacher License'
                        onChange={handleChange}
                      />
                      </label>
                      </div>
                    </div>
                    </div>
            </fieldset>

    )
  }

}
