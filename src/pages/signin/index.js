import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Row, Col, Form } from 'antd'

import {
  KeyBtn, Btn,
  GoogleBtn } from '../../components/button'

import { FormItem, Email, Password } from '../../components/forms'

import { helper } from '../../utils/helper'
import { history } from '../../utils/history'

export class Singin extends Component {
  state = {
    email: '',
    password: '',
    valid: {
      email: false,
      password: false,
    },
    loading: {
      email: false,
      google: false,
    },
    message: '',
  }

  onChange = (value, name) => {
    let state = this.state
    state[name] = value
    state.valid = {
      email: false,
      password: false,
    }
    this.setState(state)
  }

  onEmail = async () => {
    let valid = {
      email: undefined,
      password: undefined,
    }
    let message = ''
    let { email, password, loading } = this.state
    try {
      if (email === '') valid.email = 'error'
      if (password === '') valid.password = 'error'

      if (!valid.email && !valid.password) {
        loading.email = true
        this.setState({ loading })
        await this.props.member.loginByEmail({ email, password })
      }
    } catch (e) {
      message = e.message
    }
    loading.email = false
    this.setState({ valid, loading, message })
  }

  onGmail = async (res) => {
    await this.props.onGmail(res)
  }

  render() {
    let {
      email, password,
      valid, loading,
      error,
    } = this.state

    let { onClose } = this.props
    let errText
    if (error) errText = (<TextError>{error}</TextError>)
    return (
      <Page>
        <h2>Login</h2>
        <br />
        <Row>
          <Col md={24}>
            <GoogleBtn text="Login with Google" />
          </Col>
        </Row>
        <br />
        <p>or login with your email</p>
        <Form colon={false}>
          <Row>
            <Col span={24} style={btn}>
              <FormItem
                label=""
                status={valid.email}
                error="please fill your email">
                <Email
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={this.onChange} />
              </FormItem >
            </Col>

            <Col span={24} style={btn}>
              <FormItem
                label=""
                status={valid.password}
                error="please fill your password">
                <Password
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={this.onChange} />
              </FormItem >
            </Col>

            <Col span={24} style={btn}>
              {errText}
              <KeyBtn text="LOGIN" onClick={this.onEmail} />
            </Col>

            <Col span={24} style={btn}>
              <Btn text="CLOSE" onClick={onClose} />
            </Col>

            <Col span={24}>
              <Link to="" onClick={onClose}>Forgot your password?</Link>
            </Col>
          </Row>
        </Form>
      </Page>
    )
  }
}

const Page = styled.div`
  text-align: center;
`

const TextError = styled.p`
  color: #FF3A33;
  font-size: 14px;
`
let btn = { marginBottom: '4px' }

export default inject('member')(observer(Singin))
