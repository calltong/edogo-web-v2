import React, { Component } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'

export default class Filter extends Component {
  state = {
    display: true,
  }

  onToggle = async () => {
    let { display } = this.state
    this.setState({ display: !display })
  }

  render() {
    let { style, children } = this.props
    let { display } = this.state
    let content
    if (display) {
      content = (
        <Row style={rowCss}>
          {children}
        </Row>)
    }
    return (
      <Page style={style}>
        <Row onClick={this.onToggle}>
          <Col span={12}>
            <Title>Filter</Title>
          </Col>
          <Col span={1} offset={11}>
            <Icon><i className="fas fa-filter" /></Icon>
          </Col>
        </Row>

        {content}
      </Page>
    )
  }
}

const Page = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 0px;
`

const Title = styled.h3`
  margin: 10px;
`

const Icon = styled.div`
  padding: 10px;
  font-size: 18px;
  color: #58a854;
  text-align: center;
`

const rowCss = {
  border: '0px solid #CACAC9',
  borderTopWidth: '1px',
}
