import React from 'react'

export default class GradeData extends React.Component {

  constructor (props) {
    super(props)
    this.state = {grades: []}
    this.schoolDb = this.props.schoolDb
  }

  componentDidMount () {
    this.updateGrades()
    this.schoolDb.changes({
      since: 'now',
      live: true
    }).on('change', (change) => {
      this.updateGrades()
    }).on('error', (err) => {
      console.error(err)
    })
  }

  updateGrades () {
    this.schoolDb.allDocs({include_docs: true}).then((res) => {
      var grades = res.rows.map((row) => row.grade)
      this.setState({grades})
    })
  }

  render () {
    return (
      <div className='eidsr-data'>
        <div className='eidsr-data__header'>
          <h3 className='eidsr-data__title'>Grades Overview</h3>
        </div>
        <div className='table-list'>
          <table>
            <thead>
              <tr>
                <th>Student ID</th>
                <th>Semester</th>
                <th>Period</th>
              </tr>
            </thead>

            <tbody>
              {this.state.grades.map((grade) => <DataRow key={grade._id} grade={grade} {...this.props} />)}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

class DataRow extends React.Component {
  render () {
    let {grade} = this.props

    return (
      <tr >
        <td>{grade.GradeInfo['studentID']}</td>
        <td>{grade.GradeInfo['semester']}</td>
        <td>{grade.GradeInfo['period']}</td>
      </tr>
    )
  }
}
