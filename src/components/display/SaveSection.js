import React, { Component } from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'

import { SaveBtn, AddBtn } from '../button'

export default class SaveSection extends Component {
  render() {
    let {
      span = 3,
      display = true, type = 'save',
      onClick, text,
    } = this.props

    if (display) {
      let btn
      if (type === 'save') {
        btn = <SaveBtn style={css.save} onClick={onClick} text={text} />
      } else {
        btn = <AddBtn style={css.save} onClick={onClick} text={text || 'CREATE'} />
      }

      return (
        <Section>
          <Row>
            <Col span={span} offset={21}>
              {btn}
            </Col>
          </Row>
        </Section>
      )
    } else {
      return (<div />)
    }
  }
}

const Section = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  padding 5px 0px;
  background-color: white;
  border 0px solid #DDDBDB;
  border-top-width: 1px;
`

const css = {
  save: {
    borderRadius: '18px',
    width: '95%',
    float: 'right',
    margin: '0px 10px',
    fontWeight: 'bold',
  },
}
