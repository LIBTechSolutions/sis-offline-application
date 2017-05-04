'user strict'

import React from 'react'

export default class UserSearch extends React.Component {
  constructor (props) {
    super(props)

    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch () {
    let searchText = this.refs.searchText.value

    this.props.onSearch(searchText)
  }

  render () {
    return (
      <div className='search'>
        <input type='search' ref='searchText' placeholder='Search Items' onChange={this.handleSearch} />
      </div>
    )
  }
}
