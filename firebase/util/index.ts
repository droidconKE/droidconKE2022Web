import { initializeApp } from 'firebase/app'

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_NEXT_PUBLIC_API_KEY,
  authDomain: 'droidconke-70d60.firebaseapp.com',
  projectId: 'droidconke-70d60',
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGE_ID,
}

const app = initializeApp(config)

export default app
