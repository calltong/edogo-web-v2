import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Dropdown, Menu } from 'antd'
import styled from 'styled-components'

import { Link } from '../components/link'
const { Item } = Menu

export class HeaderMenu extends Component {
  logout = () => {
    this.props.member.logout()
  }

  render() {
    const menu = (
      <Menu
        overflowedIndicator={<BergerMenu className="fas fa-user-circle" />}
        style={css.user_menu}>
        <Item key="home">
          <Link to="/profile"><SubMenu className="far fa-user" /> Profile</Link>
        </Item>
        <Item key="menu">
          <label onClick={this.logout}>
            <SubMenu className="fas fa-sign-out-alt" /> Logout
          </label>
        </Item>
      </Menu>
    )

    return (
      <Dropdown overlay={menu} placement="bottomCenter">
        <MenuIcon className="fas fa-user-circle" />
      </Dropdown>
    )
  }
}

const MenuIcon = styled.div`
  font-size: 25px;
  margin-left: 20px;
`

const SubMenu = styled.i`
  margin-left: 10px;
  margin-right: 10px;
`

const css = {
  user_menu: {
    width: '140px',
  },
}

const BergerMenu = styled.div`
  font-size: 20px;
`

export default inject('member')(observer(HeaderMenu))
