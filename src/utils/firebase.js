import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAaeetPHKcHK9IRl46hgY_GiWm29YZG9M4",
    authDomain: "better-movie-ratings.firebaseapp.com",
    projectId: "better-movie-ratings",
    storageBucket: "better-movie-ratings.appspot.com",
    messagingSenderId: "511620297129",
    appId: "1:511620297129:web:9778e0edadd9b682cfd4b8"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
export const auth = firebase.auth();
export const storage = firebase.storage;