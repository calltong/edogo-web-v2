import React, { Component } from 'react'
import { Switch as AntComp } from 'antd'

export default class Switch extends Component {
  onChange = (val) => {
    let { name, onChange } = this.props
    if (onChange) {
      onChange(val, name)
    }
  }

  render() {
    let {
      readonly = false,
      disabled = false, value = false,
      checkedTxt, uncheckedTxt,
    } = this.props
    let css = { width: '100%' }
    if (readonly) css.backgroundColor = '#DADAD9'

    return (
      <AntComp
        readOnly={readonly}
        disabled={disabled}
        style={css}
        checked={value}
        onChange={this.onChange}
        checkedChildren={checkedTxt}
        unCheckedChildren={uncheckedTxt} />
    )
  }
}
