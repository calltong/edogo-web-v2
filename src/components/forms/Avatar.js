import React, { Component } from 'react'
import { Avatar as AntComp } from 'antd'

export default class Avatar extends Component {
  onChange = (evt) => {
    let { name, onChange } = this.props

    let files = evt.target.files
    if (files.length === 0) return

    const reader = new FileReader()
    reader.addEventListener('load', () => {
      if (onChange) onChange(reader.result, name)
    })
    reader.readAsDataURL(files[0])
  }

  render() {
    let {
      readOnly = false, disabled = false,
      size = 50, icon, value, key = 'a1'
    } = this.props
    let css = {}
    if (readOnly) {
      css.backgroundColor = '#DADAD9'
    }
    return (
      <div style={{ textAlign: 'center' }}>
        <input
          id={key}
          type="file"
          accept="image/*"
          style={{display: 'none'}}
          onChange={this.onChange} />
        <label readOnly={readOnly} htmlFor={readOnly ? '' : key}>
          <AntComp
            size={size}
            icon={icon}
            src={value}
            readOnly={readOnly}
            disabled={disabled}
            style={css} />
        </label>
      </div>
    )
  }
}
