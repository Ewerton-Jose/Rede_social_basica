import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
    apiKey: "AIzaSyDxIcGHc8vNTQOtA86VEzzmXmeYnogEFk8",
    authDomain: "biblioteca-c1700.firebaseapp.com",
    projectId: "biblioteca-c1700",
    storageBucket: "biblioteca-c1700.appspot.com",
    messagingSenderId: "181699843393",
    appId: "1:181699843393:web:205a67ce31a92b53897dc0",
    measurementId: "G-ZBD7GTLBQQ"
        };


const db = firebase.firestore();

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);