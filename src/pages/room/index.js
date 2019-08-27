import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Row } from 'antd'
import styled from 'styled-components'

import { Col } from '../../components/column'
import UserContent from './user'
import WorkContent from './work'

export class Room extends Component {
  async componentDidMount() {
    let session_id = 'A001'
    let doc = this.props.member.toJS()
    let user_id = doc.id
    console.log('member id:', user_id)
    this.props.session.connectSession({ session_id, user_id })
  }

  render() {
    return (
      <Page>
        <Row>
          <Col span={6} sm="12" xs="12">
            <UserContent />
          </Col>
          <Col span={18} sm="12" xs="12">
            <WorkContent />
          </Col>
        </Row>
      </Page>
    )
  }
/*
  render() {

    return (
      <Page>
        <Row>
          <Col span={6} sm="12" xs="12">
            <RoomMenu />
          </Col>
          <Col span={18} sm="12" xs="12">
            <WorkMenu />
          </Col>
        </Row>

        <Row>
          <Col span={6} sm="12" xs="12">
            <RoomContent />
          </Col>
          <Col span={18} sm="12" xs="12">
            <WorkContent />
          </Col>
        </Row>
      </Page>
    )
  }
  */
}

const Page = styled.div`
  padding: 10px 20px;
  min-height: 690px;
`
export default inject('member', 'session')(observer(Room))
