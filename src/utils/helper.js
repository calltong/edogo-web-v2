
export class Helper {
  sleep(ms = 1000) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  }

  isNull(val) {
    return val === null || val === undefined
  }

  notNull(val) {
    return val !== null && val !== undefined
  }

  isValue(val) {
    return val !== null && val !== undefined && val !== ''
  }

  notValue(val) {
    return val === null || val === undefined || val === ''
  }

  isEmpty(val) {
    let list = Object.keys(val)
    return val === null || val === undefined || val === '' || list === 0 || list.length === 0
  }

  toPercent(a, b) {
    if (a === 0 || b === 0) return 0

    return a / b
  }

  random({ len, prefix = '', postfix = '', character = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz', }) {
    let need = len - (prefix.length + postfix.length)
    let max = character.length
    if (need < 0) return
    if (max === 0) return
    let resp = ''

    for (let i = 0; i < need; i++ ) {
      resp += character.charAt(Math.floor(Math.random() * max));
    }
    return `${prefix}${resp}${postfix}`
  }
}

export const helper = new Helper()
export default helper
