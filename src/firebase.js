import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBhfFZBFwjVKEAolStEzBSem96VFHNLev4",
  authDomain: "linkedin-clone-fcf20.firebaseapp.com",
  projectId: "linkedin-clone-fcf20",
  storageBucket: "linkedin-clone-fcf20.appspot.com",
  messagingSenderId: "587806618773",
  appId: "1:587806618773:web:a9e1a2635da2a09c9d179c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();

export { auth, provider, storage };
export default db;
