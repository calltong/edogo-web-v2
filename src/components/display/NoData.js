import React, { Component } from 'react'
import styled from 'styled-components'
import { Icon } from 'antd'

export default class NoData extends Component {
  render() {
    let { list = [] } = this.props
    if (list.length === 0) {
      return (
        <Section>
          <Icon type="smile" />
          <Text>Data Not Found</Text>
        </Section>
      )
    } else {
      return list
    }
  }
}

const Section = styled.div`
  text-align: center;
  font-size: 20px;
  padding-top: 10px;
  padding-bottom: 8px;
  background-color: white;
`

const Text = styled.p`
  font-size: 18px;
`
