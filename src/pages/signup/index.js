import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Row, Col, Form } from 'antd'

import { KeyBtn, Btn, GoogleBtn } from '../../components/button'
import { FormItem, Email, Password } from '../../components/forms'

export class Singup extends Component {
  state = {
    email: 'calltong@gmail.com',
    password: 'iamtong2525',
    valid: {
      email: undefined,
      password: undefined,
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
        this.setState({ valid, loading })
        await this.props.member.singupByEmail({ email, password })
        loading.email = true
      }
    } catch (e) {
      message = e.message
    }
    loading.email = false
    this.setState({ valid, loading, message })
  }

  onGmail = async (res) => {
    let { onGmail } = this.props
    if (onGmail) onGmail(res)
  }

  onClose = async () => {
    if (this.props.onClose) {
      this.props.onClose()
    }
  }

  onTerm = async () => {
    this.onClose()
  }

  onPolicy = async () => {
    this.onClose()
  }


  render() {
    let {
      email, password,
      valid, loading,
      message
    } = this.state

    let { onClose } = this.props

    return (
      <Page>
        <h2>Singup</h2>
        <br />
        <Row>
          <Col md="12">
            <GoogleBtn
              text="Signup with Google"
              loading={loading.google}
              onClick={this.onGmail} />
          </Col>
        </Row>
        <br />
        <p>or signup with your email</p>
        <Form>
          <Row>
            <Col span={24} style={btn}>
              <FormItem
                label=""
                status={valid.email}
                error="please fill your email">
                <Email
                  name="email"
                  placeholder="input your email"
                  value={email}
                  onChange={this.onChange} />
              </FormItem>
            </Col>

            <Col span={24} style={btn}>
              <FormItem
                label=""
                status={valid.password}
                error="please fill your password">
                <Password
                  name="password"
                  placeholder="input your password"
                  value={password}
                  onChange={this.onChange} />
              </FormItem>
            </Col>

            <Col span={24} style={btn}>
              <KeyBtn
                text="SIGNUP"
                loading={loading.email}
                onClick={this.onEmail} />
            </Col>

            <Col span={24} style={btn}>
              <FormItem
                label=""
                status={message !== '' ? 'error' : undefined}
                error={message}>
                <Btn text="CLOSE" onClick={onClose} />
              </FormItem>
            </Col>

            <Col span={24}>
              <Note>By clicking ‘Sign Up’ you agree to the
                <Link to="" onClick={this.onTerm}> Terms of Use</Link> and
                <Link to="" onClick={this.onPolicy}> Privacy Policy</Link>
              </Note>
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

const Note = styled.p`
  font-size: 10px;
`

let btn = { marginBottom: '4px' }

export default inject('member')(observer(Singup))
