import React, { Component } from 'react'
import { InputNumber } from 'antd'

export default class InputInt extends Component {
  onChange = (val) => {
    let { name, onChange } = this.props
    if (onChange) {
      onChange(val, name)
    }
  }

  getValue(value) {
    let { text = '' } = this.props
    value = `${value}`.replace(text, '')
    value = value.replace(' ', '')
    value = `${value}`.trim()
    let len = value.length
    for (let i = 0; i < len; i++) {
      let tmp = +value[i]
      if (isNaN(tmp)) {
        return value.substr(0, i);
      }
    }

    return value
  }

  onParser = (value) => {

    value = this.getValue(value)
    return value
  }

  onFormat = (value) => {
    let { text = '' } = this.props
    value = this.getValue(value)
    return `${value} ${text}`
  }

  render() {
    let {
      readonly = false, disabled = false, min = 0, value = 0,
    } = this.props

    let css = { width: '100%' }
    if (readonly) css.backgroundColor = '#DADAD9'

    return (
      <InputNumber
        readOnly={readonly}
        disabled={disabled}
        min={min}
        style={css}
        value={value}
        onChange={this.onChange}
        formatter={this.onFormat}
        parser={this.onParser} />
    )
  }
}
