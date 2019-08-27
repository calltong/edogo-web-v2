import React, { Component } from 'react'
import styled from 'styled-components'

import { format } from '../../utils/format'

export default class TimeCol extends Component {
  render() {
    let { value } = this.props
    return (
      <Col>
        {format.toTime(value)}
      </Col>
    )
  }
}

const Col = styled.div`
  text-align: center;
`
