import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRifPx6o-FJKZm0AoIGNQ2dANje8Ubd2M",
  authDomain: "ashraf-portfolio-27388.firebaseapp.com",
  projectId: "ashraf-portfolio-27388",
  storageBucket: "ashraf-portfolio-27388.firebasestorage.app",
  messagingSenderId: "1088530862402",
  appId: "1:1088530862402:web:6b048efe999002503d78db",
  measurementId: "G-B5ZRMVK3HH"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firestore
export const db = getFirestore(app)
