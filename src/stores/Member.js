import BaseStore from './BaseStore'
import { cloneDeep } from 'lodash'
import { firebase } from '../utils/firebase'
import { error } from '../utils/error'
import { config } from '../config'

// import { error } from '../utils/error'
const LIMIT = config.limit.page

export class Member extends BaseStore {
  constructor() {
    super()
    this.observable({
      user: undefined,
    })
  }

  resetLogin() {
    this.user = undefined
  }

  getCurrentUser() {
    return new Promise((resolve) => {
      firebase.auth().onAuthStateChanged((user) => {
        console.log('change auth:', user)
        resolve(user)
      })
    })
  }

  async getUserProfile(params = {}) {
    console.log('params:', params)
    let resp = await this.getCurrentUser()
    console.log('get current user:', resp)
    this.user = {}
    return true
  }

  setUser(user) {
    this.user = user ? user : undefined
  }

  isLogin() {
    return this.user !== undefined
  }

  async logout() {
    await firebase.auth().signOut()
    this.resetLogin()
  }

  async resetPassword(email) {
    let auth = firebase.auth()

    await auth.sendPasswordResetEmail(email)
  }

  async loginByEmail(params = {}) {
    let { email, password } = params
    let auth = firebase.auth()

    await auth.signInWithEmailAndPassword(email, password)
    let user = auth.currentUser
    return this.getUserProfile(user)
  }

  async loginByGoogle(params = {}) {
    let { email, password } = params
    let auth = firebase.auth()

    await auth.signInWithEmailAndPassword(email, password)
    let user = auth.currentUser
    return this.getUserProfile(user)
  }

  async singupByEmail(params = {}) {
    let { email, password } = params
    let auth = firebase.auth()

    let resp = await auth.createUserWithEmailAndPassword(email, password)
    console.log('signup resp:', resp)
    let user = auth.currentUser
    return this.getUserProfile(user)
  }

  async singupByGoogle(params = {}) {
    let { email, password } = params
    let auth = firebase.auth()

    await auth.signInWithEmailAndPassword(email, password)
    let user = auth.currentUser
    return this.getUserProfile(user)
  }
}

export default new Member()
