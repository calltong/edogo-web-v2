import { notification } from 'antd'

const duration = 4
export class Notify {
  async success({ title, message }) {
    notification.success({
      key: title,
      style: css.success,
      message: title,
      description: message,
      duration,
    })
  }

  async error({ title, message }) {
    notification.error({
      key: title,
      style: css.error,
      message: title,
      description: message,
      duration,
    })
  }

  async warning({ title, text }) {

  }

}

const css = {
  success: {
    background: '#E8F9E6'
  },
  error: {
    background: '#FBC5C0'
  },
}
export const notify = new Notify()
export default notify
