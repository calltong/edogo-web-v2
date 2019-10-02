import React, { Component } from 'react'
import { Menu, Dropdown } from 'antd'
import styled from 'styled-components'

const color_list = [
  '#030303', '#F30505',
  '#14EE02', '#021BEE',
  '#E6FC2C', '#2CFCF6',
]

export default class ColorMenu extends Component {
  state = {
    isOpen: false,
  }

  onChange = (val) => {
    this.setState({value: val})
    if (this.props.onChange) this.props.onChange('color', val)
  }

  toggle = () => {
    let { isOpen } = this.state
    this.setState({isOpen: !isOpen})
  }

  render() {
    let { isOpen } = this.state
    let { value = color_list[0] } = this.props

    let items = color_list.map((item, index) => {
      return (
        <Menu.Item key={index}>
          <MenuItem
            style={{backgroundColor: item}}
            onClick={this.onChange.bind(this, item)} />
        </Menu.Item>
      )
    })

    let menu = (
      <Menu style={{width: '80px'}}>
        {items}
      </Menu>
    )

    const css = {
      backgroundColor: value,
      width: '50px',
      minHeight: '18px',
      marginTop: '5px',
      marginLeft: '6px',
    }
    return (
      <Dropdown overlay={menu} trigger={['click']}>
        <LabelIcon style={css} />
      </Dropdown>
    )
  }
}

const LabelIcon = styled.label`
  padding: 0px 10px;
  margin: 0px 5px;
  border-radius: 4px;
  border: 1px solid #585859;
`

const MenuItem = styled.div`
  width: 100%;
  height: 15px;
  text-align: center;
  border-radius: 2px;
`
