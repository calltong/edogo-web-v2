import React, { Component } from 'react'
import { Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import ResetForm from './ResetForm'

export default class ResetPassword extends Component {
  render() {
    return (
      <PAGE>
        <Row>
          <Col span={6} offset={8}>
            <Title>ADMIN PANEL</Title>
          </Col>
        </Row>
        <Row>
          <Col span={6} offset={8}>
            <ResetForm />
          </Col>
        </Row>
        <Row>
          <Col span={6} offset={8}>
            <Link to="../office"><Reset>Back to home</Reset></Link>
          </Col>
        </Row>
      </PAGE>
    )
  }
}

const PAGE = styled.div`
  background: rgb(242,99,35);
  background: linear-gradient(180deg, rgba(242,99,35,1) 0%, rgba(232,119,34,1) 49%, rgba(242,99,35,1) 100%);
  height: 100vh;
`

const Title = styled.h2`
  color: white;
  text-align: center;
  margin-top: 15%;
`
const Reset = styled.p`
  color: white;
  text-align: center;
  margin-top: 25px;
  text-decoration: underline white;
`
