import React, { Component } from 'react'
import styled from 'styled-components'

import { format } from '../../utils/format'

export default class IntCol extends Component {
  render() {
    let { minus = false, value = 0 } = this.props
    let prefix = ''
    if (minus) prefix = '-'
    return (
      <Col>
        {prefix + format.toDigi(value)}
      </Col>
    )
  }
}

const Col = styled.div`
  text-align: right;
  padding-right: 20%;
`
