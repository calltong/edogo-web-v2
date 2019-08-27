import React, { Component } from 'react'
import styled from 'styled-components'

import LineMenu from './LineMenu'
import ColorMenu from './ColorMenu'

const icon_list = [
  { icon: 'fas fa-pen', name: 'pen'},
  { icon: 'far fa-square', name: 'square'},
  { icon: 'far fa-circle', name: 'circle'},
  { icon: 'fas fa-eraser', name: 'eraser'},
]

class MenuIcon extends Component {
  onClick = () => {
    let { name, onClick } = this.props
    if (onClick) onClick(name)
  }

  render() {
    let {
      color = 'black',
      disabled, icon='far fa-square',
    } = this.props
    if (disabled) color = 'grey'

    return (
      <LabelIcon onClick={this.onClick}>
        <i className={icon} style={{ color }} />
      </LabelIcon>
    )
  }
}

export default class BoardMenu extends Component {
  chTools = async (name) => {
    let { setting, onChange } = this.props
    setting.tools = name
    if (onChange) onChange(setting)
  }

  onChange = (name, val) => {
    let { setting, onChange } = this.props
    setting.tools = name
    setting[name] = val
    if (onChange) onChange(setting)
  }

  onImg = (evt) => {
    let { onImage } = this.props
    let reader = new FileReader()
    reader.onload = (event) => {
      if (onImage) onImage({ data: event.target.result })
    }

    let files = evt.target.files
    if (files.length >= 1) reader.readAsDataURL(files[0])
  }

  render() {
    const {
      setting, onUndo, onRedo,
      onReset, onSave,
    } = this.props
    let tool_choose = icon_list.map((item, index) => {
      let c = item.name === setting.tools ? 'red' : 'black'
      return (
        <MenuIcon
          key={index}
          name={item.name}
          color={c}
          icon={item.icon}
          onClick={this.chTools} />
      )
    })

    return (
      <Section>
        {tool_choose}

        <LabelIcon>
          <i className="far fa-image" />
          <input
            type="file"
            accept="image/*"
            style={{display: 'none'}}
            onChange={this.onImg} />
        </LabelIcon>

        <MenuIcon
          icon="fas fa-undo"
          onClick={onUndo}
          disabled={onUndo === undefined} />
        <MenuIcon
          icon="fas fa-redo"
          onClick={onRedo}
          disabled={onRedo === undefined} />
        <MenuIcon
          icon="fas fa-broom"
          onClick={onReset}
          disabled={onReset === undefined} />
        <MenuIcon
          icon="fas fa-file-download"
          onClick={onSave} />
      </Section>
    )
  }
}

const Section = styled.div`
  border: 0px solid grey;
  border-bottom-width: 1px;
  padding: 8px 10px;
  width: 100%;
`

const LabelIcon = styled.label`
  padding: 0px 5px;
  border-color: white;
  text-align: center;
  i {
    font-size: 18px;
    color: black;
  }
`
