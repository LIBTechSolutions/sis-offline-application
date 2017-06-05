import React from 'react'

export default class GradeData extends React.Component {

  constructor (props) {
    super(props)
    this.state = {docs: []}
    this.gradeDb = this.props.gradeDb
  }

  componentDidMount () {
    this.updateDocs()
    this.gradeDb.changes({
      since: 'now',
      live: true
    }).on('change', (change) => {
      this.updateDocs()
    }).on('error', (err) => {
      console.error(err)
    })
  }

  updateDocs () {
    this.gradeDb.allDocs({include_docs: true}).then((res) => {
      var docs = res.rows.map((row) => row.doc)
      this.setState({docs})
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
              {this.state.docs.map((doc) => <DataRow key={doc._id} doc={doc} {...this.props} />)}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

class DataRow extends React.Component {
  render () {
    let {doc, viewDoc} = this.props

    return (
      <tr onClick={viewDoc(doc)}>
        <td>{doc.GradeInfo['studentID']}</td>
        <td>{doc.GradeInfo['semester']}</td>
        <td>{doc.GradeInfo['period']}</td>
      </tr>
    )
  }
}
