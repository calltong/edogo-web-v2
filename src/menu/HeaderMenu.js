import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import {
  Layout, Row,
  Col, Menu,
} from 'antd'
import styled from 'styled-components'

import { Link } from '../components/link'
import LoginMenu from './LoginMenu'
import ProfileMenu from './ProfileMenu'

const { Header } = Layout
const { Item } = Menu

export class HeaderMenu extends Component {
  toggle = () => {
    this.props.menu.toggleMenu()
  }


  render() {
    let isLogin = this.props.member.isLogin()
    let menu
    if (isLogin) menu = <ProfileMenu />
    else menu = <LoginMenu />

    return (
      <Header className="header">
        <Row type="flex">
          <Col md={col.md.logo} sm={col.sm.logo} xs={col.sm.logo}>
            <Link to="../../../">
              <Logo>EDOGO</Logo>
            </Link>
          </Col>
          <Col md={col.md.menu} sm={col.sm.menu} xs={col.sm.menu}>
            <MainMenu>
              <Menu mode="horizontal" overflowedIndicator={<BergerMenu className="fas fa-bars" />}>
                <Item>
                  <Link to="./product">
                    <TextMenu>PRODUCT</TextMenu>
                  </Link>
                </Item>
                <Item>
                  <Link to="./demo">
                    <TextMenu>DEMO</TextMenu>
                  </Link>
                </Item>
                <Item>
                  <Link to="./price">
                    <TextMenu>PRICE</TextMenu>
                  </Link>
                </Item>
              </Menu>
            </MainMenu>
          </Col>
          <Col md={col.md.profile} sm={col.sm.profile} xs={col.sm.profile}>
            <Profile>
              {menu}
            </Profile>
          </Col>
        </Row>
      </Header>
    )
  }
}

const Logo = styled.div`
  text-align: center;
  color: white;
  font-size: 22px;
`

const submenu = `
.ant-menu-horizontal {
  color: white;
  background-color: transparent;
  border-bottom: 0px;
  font-size: 18px;
}

.ant-menu-horizontal > .ant-menu-item {
  border-bottom: 0px;
}

.ant-menu-horizontal > .ant-menu-item:hover {
  color: #B6E5FE;
}

.ant-menu-horizontal > .ant-menu-submenu {
  border-bottom: 0px;
}

.ant-menu-submenu-title:hover {
  color: white;
}
`

const MainMenu = styled.div`
  ${submenu}
`

const Profile = styled.div`
  text-align: right;

  ${submenu}
`

const BergerMenu = styled.div`
  font-size: 20px;
`

const TextMenu = styled.div`
@media screen and (max-width: 425px) {
  color: #2e2e2e;
  background-color: white;
  width: 100%;
  text-align: center;
}
`

const col = {
  md: {
    logo: {
      span: 4,
      order: 1,
    },
    menu: {
      span: 12,
      order: 2,
    },
    profile: {
      span: 8,
      order: 3,
    },
  },
  sm: {
    logo: {
      span: 14,
      order: 2,
    },
    menu: {
      span: 5,
      order: 1,
    },
    profile: {
      span: 5,
      order: 3,
    },
  }
}


export default inject('member')(observer(HeaderMenu))
