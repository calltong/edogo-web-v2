import styled from 'styled-components'

const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #202020;
`

const NoItem = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #9e9e9e;
  padding: 20px;
  text-align: center;
`

const Name = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: black;
  padding: 0px;
  margin: 0px;
`

const Desc = styled.p`
  font-size: 13px;
  font-weight: 300;
  color: black;
  padding: 0px;
  margin: 0px;
`

const Center = styled.div`
  text-align: center;
`

const css = {
  dialog: '650px',
  add: {
    width: '120px',
    height: '29px',
    borderRadius: '15px',
    fontSize: '12.6px',
    fontWeight: '600',
    float: 'right',
  },
  row: {
    padding: '10px 00px',
  },
}

export {
  Title,
  Name,
  Desc,
  NoItem,
  Center,
  css
}
