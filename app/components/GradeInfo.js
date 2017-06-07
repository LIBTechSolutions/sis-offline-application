'use strict'

import React, {Component} from 'react'


export default class FeesInfo extends Component {


  render () {
    let props = this.props
    let {edit} = props
    let handleChange = props.handleChange()
    return (
      <fieldset>
      <legend>GRADE FORM</legend>
      <br>
      </br>
              <div className='large-4 medium-4 columns'>
              <label>Student ID: <small>Required</small></label>
                <input name='studentID'
                  value={props['studentID']}
                  type='text'
                  placeholder='Student ID'
                  onChange={handleChange}
                />
              </div>
              <div className='large-8 medium-8 columns'>
              <label>
              <input name='semester'
                  value={'First'}
                  type='radio'
                  checked={props.semester === 'First'}
                  key={1}
                  onChange={handleChange}
                  required
                />
                First Semester
                </label>
                <label>
                <input name='semester'
                    value={'Second'}
                    type='radio'
                    checked={props.semester === 'Second'}
                    key={2}
                    onChange={handleChange}
                    required
                  />
                Second Semester
                  </label>
                  </div>

                  <div className='large-12 medium-12 columns'>
                  <br>
                  </br>
                  <br>
                  </br>
                  <label>Periods</label>
                  <div className='container'>
                  <div className='large-6 medium-6 columns'>
                    <div className='callout'>
                <label>
                <input name='period'
                  value={'One'}
                  type='radio'
                  checked={props.period === 'One'}
                  key={1}
                  onChange={handleChange}
                  required
                />
                First Period
                </label>
                <label>
                <input name='period'
                  value={'Two'}
                  type='radio'
                  checked={props.period === 'Two'}
                  key={2}
                  onChange={handleChange}
                  required
                />
                Second Period
                </label>
                <label>
                <input name='period'
                  value={'Three'}
                  type='radio'
                  checked={props.period === 'Three'}
                  key={3}
                  onChange={handleChange}
                  required
                />
                Third Period
                </label>
                <label>
                <input name='period'
                  value={'Four'}
                  type='radio'
                  checked={props.period === 'Four'}
                  key={4}
                  onChange={handleChange}
                  required
                />
                Fourth Period
                </label>
                <label>
                <input name='period'
                  value={'Five'}
                  type='radio'
                  checked={props.period === 'Five'}
                  key={5}
                  onChange={handleChange}
                  required
                />
                Fifth Period
                </label>
                <label>
                <input name='period'
                  value={'Six'}
                  type='radio'
                  checked={props.period === 'Six'}
                  key={6}
                  onChange={handleChange}
                  required
                />
                Sixth Period
                </label>
                </div>
                </div>
                </div>
                </div>

                <div className='large-12 medium-12 columns'>
                <br>
                </br>
                <br>
                </br>
                <label>Subjects and Grades</label>
                <div className='container'>
                  <div className='large-3 medium-3 columns'>
                <input name='math'
                  value={props['math']}
                  type='number'
                  placeholder='Math Grade'
                  onChange={handleChange}
                />
                </div>
              <div className='large-3 medium-3 columns'>
              <input name='english'
                  value={props['english']}
                  type='number'
                  placeholder='English Grade'
                  onChange={handleChange}
                />
              </div>
              <div className='large-3 medium-3 columns'>
              <input name='biology'
                  value={props['biology']}
                  type='number'
                  placeholder='Biology Grade'
                  onChange={handleChange}
                />
              </div>
              <div className='large-3 medium-3 columns'>
              <input name='literature'
                  value={props['literature']}
                  type='number'
                  placeholder='Literature Grade'
                  onChange={handleChange}
                />
              </div>
              <div className='large-3 medium-3 columns'>
              <input name='chemistry'
                  value={props['chemistry']}
                  type='number'
                  placeholder='Chemistry Grade'
                  onChange={handleChange}
                />
              </div>
              <div className='large-3 medium-3 columns'>
              <input name='physics'
                  value={props['physics']}
                  type='number'
                  placeholder='Physics Grade'
                  onChange={handleChange}
                />
              </div>
              <div className='large-3 medium-3 columns'>
              <input name='history'
                  value={props['history']}
                  type='number'
                  placeholder='History Grade'
                  onChange={handleChange}
                />
              </div>
              <div className='large-3 medium-3 columns'>
              <input name='geography'
                  value={props['geography']}
                  type='number'
                  placeholder='Geography Grade'
                  onChange={handleChange}
                />
              </div>
              <div className='large-3 medium-3 columns'>
              <input name='economics'
                  value={props['economics']}
                  type='number'
                  placeholder='Economics Grade'
                  onChange={handleChange}
                />
            </div>
              <div className='large-3 medium-3 columns'>
              <input name='french'
                  value={props['french']}
                  type='number'
                  placeholder='French Grade'
                  onChange={handleChange}
                />
              </div>
              <div className='large-3 medium-3 columns'>
              <input name='rotc'
                  value={props['rotc']}
                  type='number'
                  placeholder='ROTC Grade'
                  onChange={handleChange}
                />
              </div>
              <div className='large-3 medium-3 columns'>
              <input name='religious'
                  value={props['religious']}
                  type='number'
                  placeholder='Religious Education Grade'
                  onChange={handleChange}
                />
              </div>
              </div>
              </div>
              </fieldset>

    )
  }

}
