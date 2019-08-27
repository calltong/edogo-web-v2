import React, { Component } from 'react'
import { Layout, Row, Col } from 'antd'

import Main from './main'
import Home from './home'
import Menu from './menu'
import Social from './social'

export default class Footer extends Component {
  render() {
    return (
      <Layout.Footer className="footer-body">
        <Row>
          <Col span={5} offset={1}>
            <Main />
          </Col>
          <Col span={5}>
            <Home />
          </Col>
          <Col span={5}>
            <Menu />
          </Col>
          <Col span={5}>
            <Social />
          </Col>
        </Row>

        <Row>
          <Col span={24} className="footer-company">
            <i className="far fa-copyright" /> Edogo | All Rights Reserved
          </Col>
        </Row>

      </Layout.Footer>
    )
  }
}
