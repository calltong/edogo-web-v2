import React, { Component } from 'react'
import { Button } from 'antd'

export default class KeyBtn extends Component {
  render() {
    let {
      disabled, style, onClick,
      children, text, loading,
    } = this.props

    let css = {
      width: '100%',
      color: 'white',
      backgroundColor: '#5bacd8',
      border: '0px',
      ...style,
    }
    return (
      <Button
        disabled={disabled}
        style={css}
        loading={loading}
        onClick={onClick}>
        {children || text}
      </Button>
    )
  }
}
