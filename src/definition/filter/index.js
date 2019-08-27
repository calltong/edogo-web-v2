import {
  StatusMap,
} from '../mapping'


const objectToMenu = (obj = {}) => {
  const list = [{ name: 'All', value: 'all' }]
  const keys = Object.keys(obj)
  for (let key of keys) {
    let name = obj[key]
    list.push({ name, value: key })
  }

  return list
}

export const StatusFilter = objectToMenu(StatusMap)
