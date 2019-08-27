import React, { Component } from 'react'
import { Button } from 'antd'

export default class SaveBtn extends Component {
  render() {
    let {
      type, className, disabled, style,
      onClick, children, text = 'SAVE'} = this.props

    return (
      <Button
        type={type}
        className={`btn-primary ${className}`}
        disabled={disabled}
        style={style}
        onClick={onClick}>
        {children || text}
      </Button>
    )
  }
}
