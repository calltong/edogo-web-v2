import React, { Component } from 'react'
import styled from 'styled-components'

export default class Page extends Component {
  render() {
    let { style, children } = this.props
    return (
      <Section style={style}>
        {children}
      </Section>
    )
  }
}

const Section = styled.div`
  
`
