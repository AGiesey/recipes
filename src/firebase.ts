import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBCjy3sSh6uJcfx2bBGXxSAxvsnZv3F7bw",
  authDomain: "adams-kitchen.firebaseapp.com",
  projectId: "adams-kitchen",
  storageBucket: "adams-kitchen.appspot.com",
  messagingSenderId: "194575382370",
  appId: "1:194575382370:web:464673c44053f7b6179e3b"
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.firestore();
export const auth = firebase.auth();