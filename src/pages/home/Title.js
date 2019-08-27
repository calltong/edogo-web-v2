import React, { Component } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'

import title from '../../assets/img/title-img.svg'
import { Btn } from '../../components/button'
import { history } from '../../utils/history'
import SigninDialog from '../signin/dialog'

const css = {
  btn: {
    color: 'black',
    backgroundColor: 'white',
    borderRadius: '15px',
    width: '150px'
  },
}

export default class Title extends Component {
  state = {
    signin: false,
  }

  openSignin = () => {
    this.setState({ signin: true })
  }

  closeSignin = () => {
    this.setState({ signin: false })
  }

  onDemo = () => {
    history.push('./demo')
  }

  render() {
    let { signin } = this.state

    return (
      <PAGE>
        <Row>
          <Col span={18}>
            <HEADER>Live</HEADER>
            <HEADER>Leaning Center</HEADER>
            <INFO>
              We are different learning center from other website because you can learn with teacher in realtime.
            </INFO>
            <Btn style={css.btn} onClick={this.openSignin}>Get Demo</Btn>
          </Col>
          <Col span={6}>
            <IMG alt="" src={title} />
          </Col>
        </Row>
        <SigninDialog display={signin} onClose={this.closeSignin} />
      </PAGE>
    )
  }
}

const PAGE = styled.div`
  color: white;
  background: rgb(91,172,216);
  background: linear-gradient(180deg, rgba(91,172,216,1) 0%, rgba(33,130,182,1) 100%);
  min-height: 320px;
  max-width: 100%;
  margin: 0px;
  padding: 15px 60px;
`

const HEADER = styled.div`
  font-size: 30px;
`

const INFO = styled.div`
  margin: 30px 0px;
  font-size: 15px;
`

const IMG = styled.img`
  width: 100%;
  height: 180px;
`
