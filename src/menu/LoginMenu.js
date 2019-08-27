import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

import { Menu } from 'antd'

import SigninDialog from '../pages/signin/dialog'
import SignupDialog from '../pages/signup/dialog'

export default class LoginMenu extends Component {
  state = {
    signin: false,
    signup: false,
  }

  openSignin = () => {
    this.setState({ signin: true, signup: false })
  }

  closeSignin = () => {
    this.setState({ signin: false, signup: false, })
  }

  openSignup = () => {
    this.setState({ signin: false, signup: true })
  }

  closeSignup = () => {
    this.setState({ signin: false, signup: false })
  }

  render() {
    let { signin, signup } = this.state

    return (
      <Page>
        <Menu
          mode="horizontal"
          overflowedIndicator={<BergerMenu className="fas fa-sign-in-alt" />} >
          <Menu.Item key="10">
            <Login onClick={this.openSignin}>LOGIN</Login>
          </Menu.Item>
          <Menu.Item key="11">
            <Signup onClick={this.openSignup}>SIGNUP</Signup>
          </Menu.Item>
        </Menu>
        <SigninDialog display={signin} onClose={this.closeSignin} />
        <SignupDialog display={signup} onClose={this.closeSignup} />
      </Page>
    )
  }
}


const Page = styled.div`

`

const Login = styled.div`
  color: white;
  background-color: transparent;
  font-size: 16px;

  @media screen and (max-width: 425px) {
    color: #2e2e2e;
    background-color: white;
    text-align: center;
  }
`

const Signup = styled.div`
  color: white;
  background-color: #0C78B2;
  font-size: 16px;
  border-radius: 25px;
  padding: 0px 25px;
  margin-bottom: 5px;
  line-height: 36px;

  @media screen and (max-width: 425px) {
    color: #2e2e2e;
    background-color: white;
    border-radius: 0px;
    width: 100%;
    padding: 0px;
    margin-bottom: 0px;
    text-align: center;
  }
`

const BergerMenu = styled.div`
  font-size: 20px;
`
