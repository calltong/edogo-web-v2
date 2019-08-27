import store from '../stores'

export class Errors {
  handle(res) {
    switch (res.statusCode) {
      case 401:
        store.member.reset()
        break
      default:
    }
  }

  lunch({ message }) {
    throw Error(message)
  }

  isError(val, { message }) {
    if (val === true) {
      throw Error(message)
    }
  }
}

export const error = new Errors()
export default error
