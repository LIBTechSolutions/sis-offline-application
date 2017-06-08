import React from 'react'
import RegistrationForm from 'RegistrationForm'

export default class RegistrationData extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      docs: [],
      modalActive: false
    }
    this.regDb = this.props.regDb
  }

  componentDidMount () {
    this.updateDocs()
    this.regDb.changes({
      since: 'now',
      live: true
    }).on('change', (change) => {
      this.updateDocs()
    }).on('error', (err) => {
      console.error(err)
    })
  }

  updateDocs () {
    this.regDb.allDocs({include_docs: true}).then((res) => {
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
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     modalActive: false
  //   }
  //   this.openModal = this.openModal.bind(this)
  //   this.closeModal = this.closeModal.bind(this)
  // }
  //
  // openModal () {
  //   this.setState({ modalActive: true })
  // }
  // closeModal () {
  //   this.setState({ modalActive: false })
  // }

  render () {
    let {doc, viewDoc} = this.props
    // let data = (this.state.modalActive && (
    //       <div className='modalDialog'>
    //         <button className='button' type='button' onClick={this.closeModal}>X</button>
    //         <h2>Modal</h2>
    //         <div>This is a sample modal</div>
    //       </div>
    //     ))

    return (
      <tr onClick={viewDoc(doc._id)} className='selected'>
        <td>{doc.RegistrationInfo['registrationtype']}</td>
        <td>{doc.RegistrationInfo['firstname']}</td>
        <td>{doc.RegistrationInfo['middlename']}</td>
      </tr>
    )
  }
}
