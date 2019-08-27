import React, { Component } from 'react'
import { Select } from 'antd'

export default class DropdownList extends Component {
  onSelected = async (selected) => {
    let { onChange, name, value } = this.props
    if (onChange && value !== selected) onChange(selected, name)
  }

  render() {
    let {
      menus = [], placeHolder = 'Please Select',
      value, clear = true, disabled = false,
      readonly = false, style,
    } = this.props
    const choice = menus.map((item) => {
      let name = item.component ? item.component : item.name
      return (
        <Select.Option
          key={item.value}
          disabled={item.disabled}>
          {name}
        </Select.Option>
      )
    })

    let css = ''
    if (readonly) css = 'select-readonly'

    return (
      <Select
        disabled={disabled || readonly}
        style={{ width: '100%', ...style }}
        className={css}
        placeholder={placeHolder}
        value={value}
        allowClear={clear}
        showArrow={true}
        onChange={this.onSelected}>
        {choice}
      </Select>
    )
  }
}
