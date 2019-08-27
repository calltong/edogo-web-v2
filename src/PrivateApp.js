import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Switch, Route } from 'react-router-dom'

import CommingSoon from './pages/auth/CommingSoon'

export class PrivateApp extends Component {
  render() {
    if (this.props.member.isLogin() === false) {
      return (<Route exact component={CommingSoon} />)
    } else {
      return (
        <Switch>
          <Route exact path="/pv/profile/general" component={CommingSoon} />

        </Switch>
      )
    }
  }
}

export default inject('member')(observer(PrivateApp));
