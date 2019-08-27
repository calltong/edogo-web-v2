import React, { Component } from 'react'
import { Layout } from 'antd'

import HeaderMenu from './HeaderMenu'
import Footer from '../footer'

export default class MainLayout extends Component {
  render() {
    return (
      <div>
        <Layout>
          <HeaderMenu />
          {this.props.children}
          <Footer />
        </Layout>
      </div>
    )
  }
}
