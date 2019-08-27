import * as admin from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

import { config } from '../config'

export const firebase = admin.initializeApp(config.firebase)
export default firebase
