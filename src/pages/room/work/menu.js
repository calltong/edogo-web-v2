import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import styled from 'styled-components'

import { Btn } from '../components'

export class WorkMenu extends Component {
  state = {
    loading: false,
    email: '',
  }

  onMenu = async (evt) => {
    this.props.session.setRoomMenu({ data: evt.target.name })
  }

  render() {
    let doc = this.props.session.toJS()
    let selected = doc.room.menu.selected
    return (
      <Section>
        <Btn
          name="whiteboard"
          onClick={this.onMenu}
          active={selected === 'whiteboard'}>Whiteboard</Btn>
        <Btn
          name="editor"
          onClick={this.onMenu}
          active={selected === 'editor'}>Editor</Btn>
        <Btn
          name="practice"
          onClick={this.onMenu}
          active={selected === 'practice'}>Practice</Btn>
      </Section>
    )
  }
}

const Section = styled.div`
  display: inline;
  border-radius: 5px;
  margin-bottom: 2px;
  div > button {
    font-size: 12px;
  }
`

export default inject('session')(observer(WorkMenu))
