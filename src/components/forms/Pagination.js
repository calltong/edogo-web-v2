import React, { Component } from 'react'
import styled from 'styled-components'
import { Pagination as Pagina  } from 'antd'

import { format } from '../../utils/format'

export default class Pagination extends Component {
  onChange = (index, size) => {
    let { onChange } = this.props
    if (onChange) onChange(index)
  }

  render() {
    let { style, page = {}} = this.props
    let { offset = 1, total = 0, limit = 1} = page

    return (
      <Page style={style}>
        <Pagina
          showTotal={total => `Total ${format.toDigi(total)}`}
          showQuickJumper
          current={offset}
          pageSize={limit}
          total={total}
          onChange={this.onChange} />
      </Page>
    )
  }
}

const Page = styled.div`
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  margin-top: 10px;
`
