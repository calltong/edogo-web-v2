import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Switch, Route } from 'react-router-dom'

import MainLayout from './menu'

import Password from './pages/reset/password'
import Room from './pages/room'

import Home from './pages/home'

import PrivateApp from './PrivateApp'

export class App extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <MainLayout>
        <Route exact path="/" component={Home} />
        <Route exact path="/password" component={Password} />
        <Route exact path="/demo" component={Room} />

        <Route path="/pv" component={PrivateApp} />
      </MainLayout>
    )
  }
}

export default inject('member')(observer(App))
