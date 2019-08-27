import React, { Component } from 'react'
import styled from 'styled-components'

export default class CommingSoon extends Component {
  render() {
    return (
      <Page>
        <Title>Comming Soon ....</Title>
      </Page>
    )
  }
}

const Page = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.87);
  padding: 60px;
  width: 100%;
  text-align: center;
`

const Title = styled.h2`
  text-align: center;
`
