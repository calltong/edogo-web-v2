import React, { Component } from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'

export default class Status extends Component {
  render() {
    let { item } = this.props
    let circle = 'fas fa-circle'
    let status = item.status === 'online' ?
      <OnlineIcon className={circle} /> :
      <OfflineIcon className={circle} />
    return (
      <Section>
        <Row>
          <Col span={2}>
            {status}
          </Col>
          <Col span={20}>
            {item.name}
          </Col>
          <Col span={2}>
            <MenuIcon className="fas fa-bars" />
          </Col>
        </Row>
      </Section>
    )
  }
}

const Section = styled.div`
  padding: 0px;
`

const OnlineIcon = styled.i`
  font-size: 18px;
  color: #04C12F;
`

const OfflineIcon = styled.i`
  font-size: 18px;
  color: #F34419;
`

const MenuIcon = styled.i`
  font-size: 18px;
  float: right;
`
