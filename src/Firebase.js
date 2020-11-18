import firebase from 'firebase/app';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const firebaseConfig = {
   apiKey: "AIzaSyB9HYgAPNodpGrSLiOoonk2HzOHp_enHaU",
   authDomain: "vaulted-arcana-293914.firebaseapp.com",
   databaseURL: "https://vaulted-arcana-293914.firebaseio.com",
   projectId: "vaulted-arcana-293914",
   storageBucket: "vaulted-arcana-293914.appspot.com",
   messagingSenderId: "534413453840",
   appId: "1:534413453840:web:45946082ea87858e7a3895"
 };

 firebase.initializeApp(firebaseConfig);

firebase.firestore().settings(settings);

export default firebase;