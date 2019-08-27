import React from 'react'
// import { PulseLoader } from 'halogenium'

export default class Loading extends React.Component {
  render() {
    let css = 'loading'
    let { loading = false, dialog = true } = this.props
    if (dialog) {
      css = 'loading-dialog'
    }

    return (
      <div className={css}
        loading={loading}
        color="#26548F"
        size="36px"
        margin="4px" />
    )
  }
}
