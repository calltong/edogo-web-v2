import React, { Component } from 'react'
import styled from 'styled-components'

export default class DisplayStatus extends Component {
  render() {
    const { status } = this.props
    switch (status) {
      case 'active':
        return <Active>Active</Active>
      case 'inactive':
        return <Inactive>Inactive</Inactive>
      case 'draft':
        return <Draft>Draft</Draft>
      default:
        return <Unknow>Unknow</Unknow>
    }
  }
}

const Active = styled.p`
  color: green;
  font-size: 16px;
`

const Inactive = styled.p`
  color: red;
  font-size: 16px;
`

const Draft = styled.p`
  color: #FB9B35;
  font-size: 16px;
`

const Unknow = styled.p`
  color: #9D9B99;
  font-size: 16px;
`
