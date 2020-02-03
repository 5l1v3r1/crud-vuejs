import firebase from 'firebase/app'
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "apiKey",
    authDomain: "vue3-crud.firebaseapp.com",
    databaseURL: "https://vue3-crud.firebaseio.com",
    projectId: "vue3-crud",
    storageBucket: "vue3-crud.appspot.com",
    messagingSenderId: "messagingSenderId",
    appId: "appId",
    measurementId: "measurementId"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({})


// export firestore database
export default firebaseApp.firestore()