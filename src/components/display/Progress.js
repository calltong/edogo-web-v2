import React, { Component } from 'react'
import styled from 'styled-components'
import {
  Modal, Progress as ProgressAnt,
  Row,
} from 'antd'
import { Btn } from '../button'

export default class Progress extends Component {
  render() {
    let {
      display = false, index = 1,
      total = 100, onCancel,
    } = this.props

    let percent = 0
    if (index > 0) {
      percent = Math.ceil(index / total * 100)
    }

    return (
      <Modal
        visible={display}
        wrapClassName="progress"
        footer={null}
        closable={false} >
        <Section>
          <Row>
            <ProgressAnt type="circle" percent={percent} />
          </Row>
          <Btn style={css.btn} text="Cancel" onClick={onCancel} />
        </Section>
      </Modal>
    )
  }
}

const Section = styled.div`
  text-align: center;
`

const css = {
  btn: {
    width: '60%',
    marginTop: '25px',
  },
}
