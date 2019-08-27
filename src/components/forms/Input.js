import React, { Component } from 'react'
import { Input as InputAntd } from 'antd'

export default class Input extends Component {
  onChange = (evt) => {
    let { name, onChange } = this.props
    if (onChange) {
      onChange(evt.target.value, name)
    }
  }

  render() {
    let {
      placeholder, readonly = false, clear = true,
      disabled = false, value = '',
    } = this.props
    let css = { width: '100%' }
    if (readonly) {
      css.backgroundColor = '#DADAD9'
    }
    return (
      <InputAntd
        placeholder={placeholder}
        readOnly={readonly}
        disabled={disabled}
        style={css}
        value={value}
        onChange={this.onChange}
        allowClear={clear} />
    )
  }
}
