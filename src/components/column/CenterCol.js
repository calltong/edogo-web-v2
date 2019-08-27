import React, { Component } from 'react'
import { Col as AntCol } from 'antd'

export default class CenterCol extends Component {
  render() {
    let { children } = this.props

    return (
      <AntCol {...this.props} style={css}>
        {children}
      </AntCol>
    )
  }
}

const css = {
  padding: '0px 5px',
  // margin: '0px 5px',
  textAlign: 'center',
}
