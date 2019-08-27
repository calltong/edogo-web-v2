import React, { Component } from 'react'
import styled from 'styled-components'

import { format } from '../../utils/format'

export default class DateCol extends Component {
  render() {
    let { value } = this.props
    return (
      <Col>
        {format.toTime(value)}
        <br />
        {format.toDate(value)}
      </Col>
    )
  }
}

const Col = styled.div`
  padding-left: 20%;
`
