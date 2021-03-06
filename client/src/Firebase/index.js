// const firebaseConfig = {
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.AUTH_DOMAIN,
//   projectId: process.env.PROJECT_ID,
//   storageBucket: 'chefocus-50ce1.appspot.com',
//   messagingSenderId: process.env.MESSAGE_SENDER,
//   appId: process.env.APP_ID,
//   measurementId: process.env.MEASUREMENT_ID
// };
import firebase from 'firebase/app';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAX5QK2owUmkaVp-cJA6FBc9MQXoT86xVU',
  authDomain: 'chefocus-50ce1.firebaseapp.com',
  databaseURL: 'https://chefocus-50ce1-default-rtdb.firebaseio.com',
  projectId: 'chefocus-50ce1',
  storageBucket: 'chefocus-50ce1.appspot.com',
  messagingSenderId: '149402979838',
  appId: '1:149402979838:web:0b7206d6c496588e8f04af',
  measurementId: 'G-W4LYEV6WYD'
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
export { storage, firebase as default };
