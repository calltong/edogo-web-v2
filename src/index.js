import './assets'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'mobx-react'

import ScrollToTop from './components/ScrollToTop'

import App from './App'
import Maintenance from './pages/auth/Maintenance'
import NotFound from './pages/auth/404'
import Forbidden from './pages/auth/403'

import history from './utils/history'
import store from './stores'

ReactDOM.render((
  <Provider {...store}>
    <Router history={history}>
      <ScrollToTop>
        <Switch>
          <Route path="/403" component={Forbidden} />
          <Route path="/maintenance" component={Maintenance} />
          <Route path="/" component={App} />
          <Route component={NotFound} />
        </Switch>
      </ScrollToTop>
    </Router>
  </Provider>
), document.getElementById('root'))
