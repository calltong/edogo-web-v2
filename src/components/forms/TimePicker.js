import React, { Component } from 'react'
import moment from 'moment'
import { TimePicker as Picker  } from 'antd'

export default class TimePicker extends Component {
  onChange = (val) => {
    let { onChange, name } = this.props
    if (onChange) onChange(val, name)
  }

  render() {
    let { value = moment(), minuteStep = 5, secondStep = 5 } = this.props
    return (
      <Picker
        style={{ width: '100%' }}
        minuteStep={minuteStep}
        secondStep={secondStep}
        value={value}
        onChange={this.onChange} />
    )
  }
}
