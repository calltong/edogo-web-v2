import React, { Component } from 'react'
import { Input } from 'antd'

export default class TextArea extends Component {
  onChange = (evt) => {
    let { name, onChange } = this.props
    if (onChange) {
      onChange(evt.target.value, name)
    }
  }

  render() {
    let {
      readonly = false, disabled = false,
      value = '', rows = '2',
    } = this.props
    let css = { width: '100%' }
    if (readonly) css.backgroundColor = '#DADAD9'

    return (
      <Input.TextArea
        readOnly={readonly}
        disabled={disabled}
        style={css}
        value={value}
        rows={rows}
        onChange={this.onChange} />
    )
  }
}
