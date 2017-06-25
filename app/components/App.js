'use strict'

import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Home from 'Home'
import * as SchoolActions from 'details'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()


class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      user: null
    }
    this.localdb = this.props.localdb
    this.remoteSync = null

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

  // componentDidMount () {
  //   this.startRemoteSync()
  // }
  //
  // componentWillUnmount () {
  //   this.stopRemoteSync()
  // }

  render () {
    return <Home {...this.state} {...this.props}
      checkLogin={this.checkLogin}
      loggedIn={this.isLoggedIn()}
      logout={this.logout}
    />
  }

  startRemoteSync () {
      console.log('starting remote sync')
      this.remoteSync = this.localdb.sync(this.props.remoteDb, {
        live: true,
        retry: true
      }).on('complete', () => {
        console.log('Remote sync complete', this.remoteSync)
      }).on('error', (err) => {
        console.log(err)
      })
    }

    stopRemoteSync () {
      this.remoteSync && this.remoteSync.cancel()
    }
}

function mapStateToProps (state) {
  return {
    schoolDetails: state.schoolDetails
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(SchoolActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
