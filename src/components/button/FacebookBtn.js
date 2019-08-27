import React, { Component } from 'react'
import { Button } from 'antd'
import styled from 'styled-components'

export default class FacebookBtn extends Component {
  render() {
    let {
      type, className, disabled, style,
      onClick, text,
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
        onClick={onClick}>
        <Icon className="fab fa-facebook-f" />{text}
      </Button>
    )
  }
}

const Icon = styled.i`
  padding-right: 5px;
`
