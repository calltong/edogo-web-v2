import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'

import { Row, Modal, Spin } from 'antd'

import { notify } from '../utils/notify'

import {
  Col,
} from '../components/common'

import {
  Title, NoItem, Center,
  Name, Desc,
  css,
} from './css'
import RadioItem from './RadioItem'
import Footer from './Footer'

export class DonorDialog extends Component {
  state = {
    loading: false,
    selected: [],
  }

  componentDidMount() {
    let { selected = [] } = this.props
    this.setState({ selected })
    this.onLoad()
  }

  onLoad = async () => {
    try {
      this.setState({ loading: true })
      await this.props.donor.getList()

    } catch(e) {
      notify.error({ title: 'Load Donor Fail', message: e.message })
    }

    this.setState({ loading: false })
  }

  onOk = () => {
    let { selected } = this.state
    let { onOk, name } = this.props
    if (onOk) onOk(selected, name)

    this.setState({ selected: [] })
  }

  onCancel = () => {
    let { onCancel } = this.props
    if (onCancel) onCancel()

    this.setState({ selected: [] })
  }

  onChange = (checked, value) => {
    let { selected } = this.state
    let { type = 'single' } = this.props
    if (type === 'single') selected = []

    if (checked) {
      selected.push(value)
    } else {
      let index = selected.findIndex((item) => item === value)
      if (index !== -1) selected.splice(index, 1)
    }

    this.setState({ selected })
  }

  render() {
    let { selected, loading } = this.state
    let { visible, disabled = [] } = this.props
    let { list } = this.props.donor.toJS().display
    let content
    if (loading) {
      content = (<Center><Spin size="large" /></Center>)
    } else if (list.length === 0) {
      content = (<NoItem>No Donor</NoItem>)
    } else {
      content = []
      list.forEach((item, index) => {
        let { id, data } = item
        if (data.status === 'active') {
          let hide = disabled.includes(id)
          let checked = false
          if (hide === false) {
            checked = selected.includes(id)
          }
          content.push(
            <Row style={css.row} key={index}>
              <Col span={2}>
                <RadioItem
                  disabled={hide}
                  checked={checked}
                  value={id}
                  onChange={this.onChange} />
              </Col>
              <Col span={22}>
                <Name>{data.name}</Name>
                <Desc>{data.address}</Desc>
              </Col>
            </Row>
          )
        }
      })
    }

    let title = <Title><i className="fas fa-building" /> Donor List</Title>
    return (
      <Modal
        title={title}
        visible={visible}
        width={css.dialog}
        footer={null}
        onCancel={this.onCancel}>
        {content}
        <Footer onOk={this.onOk} />
      </Modal>
    )
  }
}

export default inject('donor')(observer(DonorDialog))
