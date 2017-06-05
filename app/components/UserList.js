'use strict'

import React from 'react'
import Users from 'Users'

export default class UserList extends React.Component {

  render () {
    let {users} = this.props
    const renderUsers = () => {
      return users.map((user) => {
        return (
          <Users key={user.id} {...user} />
        )
      })
    }
    return (
      <div>
        {renderUsers()}
      </div>
    )
  }

}
