import React, { Component } from 'react'
import { Menu, Dropdown } from 'antd'

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

    let menu = color_list.map((item, index) => {
      return (
        <Menu.Item key={index}>
          <div
            className="whiteboard-menu-color-btn"
            style={{backgroundColor: item}}
            onClick={this.onChange.bind(this, item)} />
        </Menu.Item>
      )
    })

    const css = {
      backgroundColor: value,
      width: '50px',
      minHeight: '18px',
      marginTop: '5px',
      marginLeft: '6px',
    }
    return (
      <Dropdown overlay={menu} trigger={['click']}>

        <label className="btn whiteboard-menu-btn" style={css} />

      </Dropdown>
    )
  }
}
