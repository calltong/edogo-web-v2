import React, { Component } from 'react'
import styled from 'styled-components'

export default class DisplayBool extends Component {
  render() {
    const { value } = this.props
    if (value) return <Yes>Yes</Yes>

    return <No>No</No>
  }
}

const Yes = styled.p`
  color: green;
  font-size: 16px;
`

const No = styled.p`
  color: #F1812E;
  font-size: 16px;
`
