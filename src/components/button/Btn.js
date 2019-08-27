import React, { Component } from 'react'
import { Button } from 'antd'

export default class Btn extends Component {
  render() {
    let {
      type, className, disabled, style,
      onClick, children, text, loading
    } = this.props

    let css = {
      width: '100%',
      ...style,
    }
    return (
      <Button
        type={type}
        className={className}
        disabled={disabled}
        style={css}
        loading={loading}
        onClick={onClick}>
        {children || text}
      </Button>
    )
  }
}
