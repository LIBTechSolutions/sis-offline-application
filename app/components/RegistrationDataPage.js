import React from 'react'
import RegistrationForm from 'RegistrationForm'

export default class RegistrationData extends React.Component {

  constructor (props) {
    super(props)
    this.state = {docs: []}
    this.localdb = this.props.localdb
  }

  componentDidMount () {
    this.updateDocs()
    this.localdb.changes({
      since: 'now',
      live: true
    }).on('change', (change) => {
      this.updateDocs()
    }).on('error', (err) => {
      console.error(err)
    })
  }

  updateDocs () {
    this.localdb.allDocs({include_docs: true}).then((res) => {
      var docs = res.rows.map((row) => row.doc)
      console.log(docs)
      if (docs) {
        this.setState({docs})
      }
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
                <th>Registration Type</th>
                <th>First Name</th>
                <th>Middle Name</th>
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
    console.log(doc)
    return (
      <tr onClick={viewDoc(doc)} className='selected'>
        <td>{doc.registrationInfo.registrationtype}</td>
        <td>{doc.registrationInfo.firstname}</td>
        <td>{doc.registrationInfo.middlename}</td>
      </tr>
    )
  }
}
