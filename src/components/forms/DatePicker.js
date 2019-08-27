import React, { Component } from 'react'
import moment from 'moment'
import { DatePicker as Picker } from 'antd'

export default class DatePicker extends Component {
  onChange = (val) => {
    let { name, onChange } = this.props
    if (onChange) {
      onChange(val, name)
    }
  }

  render() {
    let {
      disabled = false, value = moment(),
      clear = false, showTime = false, readonly = false,
    } = this.props

    let timeOption
    if (showTime) {
      timeOption = {
        minuteStep: 5,
        secondStep: 5,
      }
    }

    let css = ''
    if (readonly) css = 'picker-readonly'

    return (
      <Picker
        disabled={disabled || readonly}
        allowClear={clear}
        showTime={timeOption}
        minuteStep={5}
        className={css}
        style={{ width: '100%' }}
        value={value}
        onChange={this.onChange} />
    )
  }
}
