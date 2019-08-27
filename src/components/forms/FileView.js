import React, { Component } from 'react'
import styled from 'styled-components'
import { helper } from '../../utils/helper'

export default class FileView extends Component {

  render() {
    let { value = '', style } = this.props
    let url
    if (typeof value === 'string' && value !== '') url = helper.getUrl(value)
    if (url) {
      const src = `https://docs.google.com/gview?url=${url}&embedded=true`
      return (<Doc style={style} src={src} />)
    } else {
      return (<NoDoc style={style}>Please Select File..</NoDoc>)
    }
  }
}

const Doc = styled.iframe`
  padding: 2px;
  width: 100%;
  height: 500px;
`

const NoDoc = styled.div`
  padding: 2px;
  width: 100%;
  height: 500px;
  background-color: #F5F4F4;
  font-size: 18px;
  text-align: center;
  padding-top: 20%;
`
