import firebase from 'firebase';

const firebaseConfig = {
  // Your Config Goes Here
  apiKey: "AIzaSyDEq-JUwK80D08eGE2MHlqXuoUsZFGzIxU",
    authDomain: "whatapp-react.firebaseapp.com",
    projectId: "whatapp-react",
    storageBucket: "whatapp-react.appspot.com",
    messagingSenderId: "660662436916",
    appId: "1:660662436916:web:6f0268649719b156a9f661"
};

const whatsApp = firebase.initializeApp(firebaseConfig);

const db = whatsApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export default db;
export { provider, auth };
