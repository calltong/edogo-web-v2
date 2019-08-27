import React, { Component } from 'react'
import { Modal } from 'antd'

import Signup from './index'

export default class SignupDialog extends Component {
  render() {
    let { display, onClose } = this.props
    return (
      <Modal
        visible={display}
        width={400}
        maskClosable={false}
        footer={null}
        onCancel={onClose}>
        <Signup onClose={this.props.onClose} />
      </Modal>
    )
  }
}
