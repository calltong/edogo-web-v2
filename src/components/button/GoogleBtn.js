import React, { Component } from 'react'
import { Button } from 'antd'
import styled from 'styled-components'

export default class GoogleBtn extends Component {
  render() {
    let {
      type, className, disabled, style,
      onClick, text, loading,
    } = this.props

    let css = {
      width: '100%',
      color: 'white',
      backgroundColor: '#D83E29',
      border: '0px',
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
        <Icon className="fab fa-google" />{text}
      </Button>
    )
  }
}

const Icon = styled.i`
  padding-right: 5px;
`
