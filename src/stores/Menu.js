import BaseStore from './BaseStore'

export class Menu extends BaseStore {
  constructor() {
    super()
    this.observable({
      openning: true,
    })
  }

  toggleMenu() {
    this.openning = this.openning !== true
  }
}

export default new Menu()
