import React, { Component } from 'react'
import { Button } from 'antd'

export default class AddBtn extends Component {
  render() {
    let {
      type, className, disabled, style,
      onClick, children, text = 'ADD'} = this.props

    return (
      <Button
        type={type}
        className={className}
        disabled={disabled}
        style={style}
        onClick={onClick}>
        {children || text}
      </Button>
    )
  }
}
