'use strict'

import React from 'react'
import classnames from 'classnames'

export default class FeeDataList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startIndex: 0
    }
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
  }

  getEndIndex () {
    return this.state.startIndex + this.props.limit
  }

  nextPage () {
    this.setState((prevState, props) => {
      return {startIndex: Math.min(props.docs.length - 1, prevState.startIndex + props.limit)}
    })
  }

  previousPage () {
    this.setState((prevState, props) => {
      return {startIndex: Math.max(0, prevState.startIndex - props.limit)}
    })
  }

  hasPreviousPage () {
    return this.state.startIndex > 0
  }

  hasNextPage () {
    return this.state.startIndex + this.props.limit < this.props.docs.length
  }

  render () {
    const docs = this.props.limit
      ? this.props.docs.slice(this.state.startIndex, this.getEndIndex())
      : this.props.docs
    const classes = classnames(this.props.className, 'table-list')
    const pagination = this.props.limit
      ? (
        <tfoot>
          <tr>
            <td colSpan='2'><button className='btn' type='button' onClick={this.previousPage} disabled={!this.hasPreviousPage()}>Previous</button></td>
            <td colSpan='3' style={{textAlign: 'right'}}><button className='btn' type='button' onClick={this.nextPage} disabled={!this.hasNextPage()}>Next</button></td>
          </tr>
        </tfoot>
        )
      : null

    return docs.length === 0
      ? <em>No cases</em>
      : (
        <table className={classes}>
          <thead>
            <tr>
              <th>Semester</th>
              <th>Period</th>
              <th>Class</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>
            {docs.map((doc) => <DataRow key={doc._id} doc={doc} {...this.props} />)}
          </tbody>
          {pagination}
        </table>
    )
  }
}

function DataRow (props) {
  let {doc, viewDoc, selectedDetail} = props
console.log(doc)
  return (
    <tr onClick={viewDoc(doc)} className={selectedDetail._id === doc._id ? 'selected' : ''}>
      <td>{doc.feeInfo.semester}</td>
      <td>{doc.feeInfo.period}</td>
      <td>{doc.feeInfo.class}</td>
      <td>{doc.feeInfo.amount}</td>
    </tr>
  )
}
