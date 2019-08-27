import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import styled from 'styled-components'
import { Row, Col } from 'antd'

import { Link } from '../../../components/link'

import doc from './contants'

export default class Feature extends Component {
  async componentDidMount() {

  }

  render() {
    let list = doc.map((item, index) => {
      return (
        <Col span={4} key={index} style={css.col}>
            <Link style={css.link} to="../">
              <img style={css.img} src={item.image} alt="" />
              <Name>{item.name}</Name>
            </Link>
        </Col>
      )
    })

    return (
      <PAGE>
        <Title>FEATURES</Title>
        <Row>
          {list}
        </Row>
      </PAGE>
    )
  }
}

const PAGE = styled.div`
  background-color: white;
  padding: 40px 60px;
`

const Title = styled.h1`
  color: #000000;
  text-align: center;
  margin-bottom: 40px;
  hover {
    color: #000000;
  }
`

const Name = styled.h4`
  padding-top: 10px;
  color: #1a1a1a;
`

let css = {
  col: {
    margin: '0 auto',
    textAlign: 'center',
    paddingBottom: '15px',
  },
  link: {
    border: '0',
  },
  title: {
    paddingTop: '10px',
    color: '#1a1a1a',
  },
  img: {
    width: '65px',
    hight: '65px',
    paddingBottom: '20px',
  },
}
