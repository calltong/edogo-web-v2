import React, { Component } from 'react'
import styled from 'styled-components'

import ac01 from '../../../assets/img/ac01.jpg'
import ac02 from '../../../assets/img/ac02.jpg'

import Person from './person'

export default class UserContent extends Component {
  render() {
    let d1 = {
      status: 'online',
      name: 'Tong+',
      img: ac01,
    }

    let d2 = {
      status: 'offline',
      name: 'You',
      img: ac02,
    }

    return (
      <Section>
        <div>
          <div>
            <Person item={d1} />
          </div>
          <div>
            <Person item={d2} />
          </div>
        </div>
      </Section>
    )
  }
}

const Section = styled.div`

`
