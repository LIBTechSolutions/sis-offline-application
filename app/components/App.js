'use strict'

import React from 'react'
import Home from 'Home'

export default class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      user: null
    }

    this.checkLogin = this.checkLogin.bind(this)
    this.logout = this.logout.bind(this)
  }

  checkLogin (user) {
    const {config} = this.props

    if (user in config.allowed_users) {
      this.login(Object.assign({user}, config.allowed_users[user, user.password]))
    }
  }

  login (user) {
    this.setState({user})
  }

  logout () {
    this.setState({user: null})
  }

  isLoggedIn () {
    return !!this.state.user
  }

  render () {
    return <Home {...this.state} {...this.props}
      checkLogin={this.checkLogin}
      loggedIn={this.isLoggedIn()}
      logout={this.logout}
    />
  }
}
