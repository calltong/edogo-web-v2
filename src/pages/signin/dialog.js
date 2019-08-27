import React, { Component } from 'react'
import { Modal } from 'antd'
import Signin from './index'

export default class SigninDialog extends Component {
  render() {
    let { display, onClose } = this.props
    return (
      <Modal
        visible={display}
        width={400}
        maskClosable={false}
        footer={null}
        onCancel={onClose}>
        <Signin onClose={onClose} />
      </Modal>
    )
  }
}
