import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyA8iT2YiJAeWvlnOaSpFy9sOd7899x7vqE",
    authDomain: "disney-r.firebaseapp.com",
    projectId: "disney-r",  
    storageBucket: "disney-r.appspot.com",
    messagingSenderId: "1085350822298",
    appId: "1:1085350822298:web:5655ddf25ca71c00eeba23"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth,provider,storage};
export default db;