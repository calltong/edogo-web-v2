import React, { Component } from 'react'
import { Button } from 'antd'
import styled from 'styled-components'

export default class EditBtn extends Component {
  render() {
    let {
      type, className, disabled, style,
      onClick, children, text = ''} = this.props

    return (
      <Button
        type={type}
        className={className}
        disabled={disabled}
        style={style}
        onClick={onClick}>
        <Icon className="fas fa-pencil-alt" /> {children || text}
      </Button>
    )
  }
}

const Icon = styled.i`
  padding-right: 5px;
`
