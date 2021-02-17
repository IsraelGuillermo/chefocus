import firebase from "firebase/app"
import "firebase/storage"

const firebaseConfig = {
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyAX5QK2owUmkaVp-cJA6FBc9MQXoT86xVU",
    authDomain: "chefocus-50ce1.firebaseapp.com",
    projectId: "chefocus-50ce1",
    storageBucket: "chefocus-50ce1.appspot.com",
    messagingSenderId: "149402979838",
    appId: "1:149402979838:web:0b7206d6c496588e8f04af",
    measurementId: "G-W4LYEV6WYD"
};

// init firebase

firebase.initializeApp(firebaseConfig);