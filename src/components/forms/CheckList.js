import React, { Component } from 'react'
import { Select } from 'antd'

export default class CheckList extends Component {
  onSelected = async (selected) => {
    let { onChange, name } = this.props
    if (onChange) onChange(selected, name)
  }

  render() {
    let {
      menus = [], value = [], placeholder = 'Please Select',
      readonly = false, disabled = false,
    } = this.props

    const choice = []
    for (let item of menus) {
      choice.push(
        <Select.Option key={item.value}>{item.name}</Select.Option>
      )
    }

    let css = ''
    if (readonly) css = 'select-readonly'

    return (
      <Select
        mode="multiple"
        style={{ width: '100%' }}
        disabled={disabled || readonly}
        className={css}
        placeholder={placeholder}
        value={value}
        allowClear={true}
        showArrow={true}
        onChange={this.onSelected}>
        {choice}
      </Select>
    )
  }
}
