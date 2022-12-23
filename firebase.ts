// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPbUvIMRXcXo-zdHsmD15uCGwM1Uawl3g",
  authDomain: "netflox-361c7.firebaseapp.com",
  projectId: "netflox-361c7",
  storageBucket: "netflox-361c7.appspot.com",
  messagingSenderId: "849354720842",
  appId: "1:849354720842:web:d78a7a1d578c1c5ff7c8b3"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }