import React, { Component } from 'react'
import { Button } from 'antd'
import styled from 'styled-components'

export default class BackBtn extends Component {
  render() {
    let {
      type, className, disabled, style,
      onClick, children, text = 'BACK'} = this.props

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
        onClick={onClick}>
        <Icon className="fas fa-level-up-alt" /> {children || text}
      </Button>
    )
  }
}


const Icon = styled.i`
  padding-right: 5px;
`
