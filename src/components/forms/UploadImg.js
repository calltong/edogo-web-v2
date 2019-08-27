import React, { Component } from 'react'
import styled from 'styled-components'
import { Icon, Modal } from 'antd'
import { helper } from '../../utils/helper'

export default class UploadImg extends Component {
  state = {
    display: false,
  }

  onChange = async (evt) => {
    let files = evt.target.files
    if (files.length === 0) return

    let { onChange } = this.props
    const reader = new FileReader()
    reader.addEventListener('load', () => {
      if (onChange) onChange(reader.result)
    })
    reader.readAsDataURL(files[0])
  }

  openPreview = async () => {
    this.setState({ display: true })
  }

  closePreview = async () => {
    this.setState({ display: false })
  }

  onDelete = async () => {
    let { onChange } = this.props
    if (onChange) onChange('')
  }

  onUpload = () => {}

  render() {
    let { display } = this.state
    let {
      name = 'upload img', style, value,
      readonly = false,
    } = this.props
    let content
    let btn
    let preview
    let url = helper.getUrl(value)
    if (url) {
      content = (<Img src={url} alt="images" />)
      btn = (
        <ActionBtn>
          <Icon type="eye" onClick={this.openPreview} />
          {readonly ? <div /> : <Icon type="delete" onClick={this.onDelete} /> }
        </ActionBtn>
      )

      preview = (
        <Modal visible={display} footer={null} onCancel={this.closePreview}>
          <PreviewImg alt="images" src={url} />
        </Modal>
      )
    } else {
      content = (
        <SelectImg>
          <Icon type="plus" />
          <Text>UPLOAD</Text>
        </SelectImg>
      )
    }

    return (
      <Section style={style}>
        <input
          id={name}
          type="file"
          accept="image/*"
          style={{display: 'none'}}
          onChange={this.onChange} />
        {btn}
        <label readOnly={readonly} htmlFor={readonly ? '' : name}>
          {content}
        </label>
        {preview}
      </Section>
    )
  }
}

const Section = styled.div`
  margin-bottom: 2px;
`

const Text = styled.p`
  margin: 0px;
  padding: 0px;
  line-height: 10px;
`

const SelectImg = styled.div`
  width: 100%;
  background-color: #EEEDED;
  text-align: center;
  padding 20px;
  border-radius: 5px;
  border: dashed 1px #B5B4B4;

  :hover {
    cursor: pointer;
  }
`

const Img = styled.img`
  width: 100%;
  border-radius: 2px;
  :hover {
    cursor: pointer;
  }
`

const PreviewImg = styled.img`
  width: 100%;
`

const ActionBtn = styled.div`
  position: absolute;
  display: inline;
  white-space: nowrap;
  padding-left: 90%;
  z-index: 5;
  i {
    font-size: 20px;
    padding-top: 10px;
    padding-left: 5px;
  }

  i:hover {
    color: #E87722;
  }
`
