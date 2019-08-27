import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd'
import styled from 'styled-components'

const { Item } = Form

const logo = require("../../../assets/img/code.svg")

const cssBtn = {
  color: '#ECECEC',
  backgroundColor: '#575756',
  borderRadius: '15px',
  width: '100%',
}

const cssItem = {
  marginBottom: '5px',
}

export class Login extends Component {
  onSubmit = e => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {

    })
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const colorCss = {
      color: 'rgba(0,0,0,.25)',
    }
    return (
      <LoginSection>
        <Logo src={logo} />
        <Form onSubmit={this.onSubmit} className="login-form">
          <Item style={cssItem}>
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your email!' }],
            })(
              <Input
                prefix={<Icon type="user" style={colorCss} />}
                placeholder="Email" />,
            )}
          </Item>
          <Item style={cssItem}>
          <TextError><i className="fas fa-exclamation-circle" />Email is incorrect</TextError>
          </Item>
          <Item style={cssItem}>
            <Button style={cssBtn} htmlType="submit">
              RESTORE
            </Button>
          </Item>
        </Form>
      </LoginSection>
    )
  }
}

const LoginSection = styled.div`
  background-color: white;
  border-radius: 10px;
  margin-top: 20px;
  padding: 40px 40px 10px 40px;
`

const Logo = styled.img`
  color: white;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  margin-bottom: 20px;
`

const TextError = styled.p`
  color: #F14338;
  text-align: center;
  margin-bottom: 0px;
  i {
    margin-right: 4px;
  }
`

const ResetForm = Form.create({ name: 'normal_login' })(Login)
export default ResetForm
