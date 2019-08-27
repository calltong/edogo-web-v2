import React, { Component } from 'react'
import { Button } from 'antd'
import styled from 'styled-components'

export default class Btn extends Component {
  render() {
    let {
      name, active = false, disabled,
      style, onClick, children
    } = this.props


    let tmp = (
      <Button
        name={name}
        disabled={disabled}
        style={style}
        onClick={onClick}>
        {children}
      </Button>
    )

    if (active) {
      return <ActiveBtn>{tmp}</ActiveBtn>
    } else {
      return <InactiveBtn>{tmp}</InactiveBtn>
    }
  }
}

const ActiveBtn = styled.div`
  button {
    margin-right: 2px;
    border: 1px solid #7F8080;
    background-color: #26548F;
    color: white;
    width: 100px;
  }
`

const InactiveBtn = styled.div`
  button {
    margin-right: 2px;
    border: 1px solid #7F8080;
    background-color: white;
    color: black;
    width: 100px;
  }

  button:hover {
    background-color: white;
    border-color: #343266;
  }
`
