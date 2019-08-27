import React, { Component } from 'react'
import styled from 'styled-components'

export default class RadioItem extends Component {
  onChange = () => {
    let { onChange, checked = false, value } = this.props

    if (onChange) onChange(!checked, value)
  }

  render() {
    let { checked = false, disabled = false } = this.props
    let content
    if (disabled) content = <Disabled />
    else if (checked) content = <Inner onClick={this.onChange} />
    return (
      <Outer onClick={disabled ? undefined : this.onChange}>
        {content}
      </Outer>
    )
  }
}

const Disabled = styled.div`
  background-color: #FC8C8C;
  width: 24px;
  height: 24px;
  border-radius: 100%;
  float: center;
  margin-left: 2px;
  margin-top: 2px;
`

const Inner = styled.div`
  background-color: rgb(88, 168, 84);
  width: 24px;
  height: 24px;
  border-radius: 100%;
  float: center;
  margin-left: 2px;
  margin-top: 2px;
`

const Outer = styled.div`
  background-color: white;
  border: 1px solid #979797;
  width: 30px;
  height: 30px;
  border-radius: 100%;
`
