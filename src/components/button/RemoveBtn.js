import React, { Component } from 'react'
import { Button } from 'antd'
import styled from 'styled-components'

export default class RemoveBtn extends Component {
  render() {
    let {
      type, className, disabled, style,
      onClick, children, text = 'DELETE'} = this.props

    return (
      <Button
        type={type}
        className={`btn-primary ${className}`}
        disabled={disabled}
        style={style}
        onClick={onClick}>
        <Icon className="fas fa-trash-alt" /> {children || text}
      </Button>
    )
  }
}

const Icon = styled.i`
  padding-right: 5px;
`
