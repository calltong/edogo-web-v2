import React, { Component } from 'react'
import { Row } from 'antd'

export default class RowItem extends Component {
  render() {
    let { children, index = 0 } = this.props
    let css = {
      color: '#202020',
      fontSize: '16px',
      padding: '15px 0px',
      backgroundColor: 'white',
    }

    if (index % 2 === 0) css.backgroundColor = '#e0e0e0'
    else css.backgroundColor = 'white'

    return (
      <Row style={css}>
        {children}
      </Row>
    )
  }
}
