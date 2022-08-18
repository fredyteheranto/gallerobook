import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCzzi7sQaKQRw5hEIhxesPcHQKstmNi764',
  authDomain: 'migallero.firebaseapp.com',
  projectId: 'migallero',
  storageBucket: 'migallero.appspot.com',
  messagingSenderId: '174077403146',
  appId: '1:174077403146:web:3bf12cd2a926fd8691fff3',
  measurementId: 'G-ZEWSYYF9VG',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { Db, auth, storage };
export default app;
