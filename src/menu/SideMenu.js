import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import menu from './menu'
const logo = require("../assets/img/img-logo.svg")
const { Sider } = Layout

export class SideMenu extends Component {
  toggle = () => {
    this.props.menu.toggleMenu()
  }

  render() {
    const { openning } = this.props.menu.toJS()
    const list = menu.side_menu.map((item, index) => {
      if (item.submenu && item.submenu.length > 0) {
        let submenu = item.submenu.map((it, i) => {
          return (
            <Menu.Item key={`${index}-${i}`}>
              <Link to={it.link}>
                {it.name}
              </Link>
            </Menu.Item>
          )
        })
        return (
          <Menu.SubMenu key={index}
            title={
              <span>
                <i className="anticon">
                  <i className={item.icon} />
                </i>
                <span>{item.name}</span>
              </span>
            }>
            {submenu}
          </Menu.SubMenu>
        )
      } else {
        return (
          <Menu.Item key={index}>
            <Link to={item.link}>
              <i className="anticon">
                <i className={item.icon} />
              </i>
              <span>{item.name}</span>
            </Link>
          </Menu.Item>
        )
      }
    })
    return (
      <Sider className="sider" trigger={null} collapsible collapsed={!openning}>
        <Menu theme="light" mode="inline">
          <div>
            <Logo src={logo} onClick={this.toggle} />
          </div>
          <Menu.Divider />
          {list}
        </Menu>
      </Sider>
    )
  }
}

const Logo = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-height: 100px;
  padding: 20px;
`

export default inject('menu')(observer(SideMenu))
