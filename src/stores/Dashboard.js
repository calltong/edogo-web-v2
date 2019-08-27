import BaseStore from './BaseStore'
import moment from 'moment'
import { cloneDeep } from 'lodash'

const original = {
  recipient: {
    data: {
      recipientId: '',
      deliveryDate: '',
      deliveries: [],
      foods: [],
      kilometer: 0,
      weight: 0,
      numberOfBasket: 0,
      returnedBasket: 0,
    },
  }
}
export class Dashboard extends BaseStore {
  constructor() {
    super()
    this.observable({
      filter: {
        mode: 'recipient',
        date: moment().startOf('day')
      },
      recipient: [],
    })
  }

  async getDoc({ type, date }) {

  }

}

export default new Dashboard()
