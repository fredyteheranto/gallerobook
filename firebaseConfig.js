import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyCzzi7sQaKQRw5hEIhxesPcHQKstmNi764',
  authDomain: 'migallero.firebaseapp.com',
  projectId: 'migallero',
  storageBucket: 'migallero.appspot.com',
  messagingSenderId: '174077403146',
  appId: '1:174077403146:web:3bf12cd2a926fd8691fff3',
  measurementId: 'G-ZEWSYYF9VG',
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
