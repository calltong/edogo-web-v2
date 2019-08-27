import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Row, Col, Form } from 'antd'

export default class CheckEmail extends Component {
  render() {
    return (
      <Page>
        <Title>Please Check Your Email</Title>
        <Link to="" onClick={this.onTerm}> Terms of Use</Link> and
      </Page>
    )
  }
}

const Page = styled.div`
  text-align: center;
`

const Title = styled.div`
  text-align: center;
`
