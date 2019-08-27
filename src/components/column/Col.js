import React, { Component } from 'react'
import { Col as AntCol } from 'antd'

export default class Col extends Component {
  render() {
    let { children, style = {} } = this.props
    const css = {
      padding: '0px 4px',
      ...style,
    }
    return (
      <AntCol {...this.props} style={css}>
        {children}
      </AntCol>
    )
  }
}
