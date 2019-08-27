import React, { Component } from 'react'
import styled from 'styled-components'

export default class ErrorPage extends Component {
  render() {
    let { display = false, message = '', children } = this.props
    if (display) {
      return (
        <Section>
          <Icon className="far fa-grin-tears" />
          <Text>Sorry Something Went Wrong!</Text>
          <Message>{message}</Message>
        </Section>
      )
    } else {
      return children
    }
  }
}

const Section = styled.div`
  text-align: center;
  font-size: 20px;
  padding: 30px;
`

const Icon = styled.i`
  font-size: 45px;
`

const Text = styled.h4`
  color: #6C6C6B;
  padding: 10px;
`

const Message = styled.h4`
  color: #6C6C6B;
`
