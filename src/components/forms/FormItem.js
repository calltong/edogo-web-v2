import React, { Component } from 'react'
import { Form } from 'antd'

export default class FormItem extends Component {
  onChange = (evt) => {
    let { name, onChange } = this.props
    if (onChange) {
      onChange(evt.target.value, name)
    }
  }

  render() {
    let {
      label, children, onChange,
      status, help, hasFeedback, error
    } = this.props

    if (label === undefined) label = ' '
    let text
    if (status) text = error

    return (
      <Form.Item
        style={{textAlign: 'left'}}
        label={label}
        validateStatus={status}
        help={text || help}
        hasFeedback={hasFeedback}
        onChange={onChange}>
        {children}
      </Form.Item>
    )
  }
}
