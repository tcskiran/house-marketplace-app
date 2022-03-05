import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB3lDvCzMH622nGDKtfJW73MMZsD-q5qAo',
  authDomain: 'house-marketplace-app-48560.firebaseapp.com',
  projectId: 'house-marketplace-app-48560',
  storageBucket: 'house-marketplace-app-48560.appspot.com',
  messagingSenderId: '954824954344',
  appId: '1:954824954344:web:b10318670f63457641145d',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
