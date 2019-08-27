import React, { Component } from 'react'
import styled from 'styled-components'
import { AddBtn } from '../components/button'
import { css } from './css'

export default class Footer extends Component {
  onChange = () => {
    let { onChange, checked = false, value } = this.props

    if (onChange) onChange(!checked, value)
  }

  render() {
    let { onOk } = this.props

    return (
      <Inner>
        <AddBtn style={css.add} onClick={onOk} />
      </Inner>
    )
  }
}

const Inner = styled.div`
  margin-top: 10px;
  padding: 10px 0px;
  min-height: 30px;
  border: 0px solid #f2f2f2;
  border-top-width: 2px;
`
