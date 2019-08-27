import React, { Component } from 'react'
import { Dropdown, Menu, Row, Col } from 'antd'

export default class LineMenu extends Component {
  state = {
    isOpen: false,
  }

  onChange = (item) => {
    let { onChange } = this.props
    if (onChange) onChange('size', item.value)
  }

  toggle = () => {
    let { isOpen } = this.state
    this.setState({isOpen: !isOpen})
  }

  render() {
    let { isOpen } = this.state
    let { value } = this.props
    let selected = size_list.find((it) => {
      return it.value === value
    })

    if (selected === undefined) selected = size_list[0]
    let col = {
      paddingRight: '8px',
      paddingLeft: '8px',
    }

    let menus = size_list.map((item, index) => {
      let cssLine = { borderTop: `${item.label + 2}px solid black` }
      return (
        <Menu.Item key={index}>

          <Row onClick={this.onChange.bind(this, item)}>
            <Col span={4} style={col}>{item.label}</Col>
            <Col span={18} style={col}>
              <hr className="whiteboard-menu-line-item" style={cssLine} />
            </Col>
          </Row>

        </Menu.Item>
      )
    })

    return (
      <Dropdown overlay={menus} trigger={['click']}>
        <a className="ant-dropdown-link" href="#" >
          <label className="whiteboard-menu-line-btn">
            {selected.label}
          </label>
        </a>
      </Dropdown>
    )
  }
}

const size_list = [
  {
    label: 1,
    value: 2,
  },
  {
    label: 2,
    value: 4,
  },
  {
    label: 3,
    value: 6,
  },
  {
    label: 4,
    value: 8,
  },
  {
    label: 5,
    value: 10,
  },
]
