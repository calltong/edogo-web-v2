import React, { Component } from 'react'
import { Link as RLink } from 'react-router-dom'

export default class Link extends Component {
  render() {
    let { to, style, className, children } = this.props
    const css = {
      color: 'inherit',
      ...style
    }
    return (
      <RLink
        to={to}
        style={css}
        className={className}>
        {children || 'Click'}
      </RLink>
    )
  }
}
