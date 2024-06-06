
const firebaseConfig = {

  apiKey: "AIzaSyDxIcGHc8vNTQOtA86VEzzmXmeYnogEFk8",
  authDomain: "biblioteca-c1700.firebaseapp.com",
  projectId: "biblioteca-c1700",
  storageBucket: "biblioteca-c1700.appspot.com",
  messagingSenderId: "181699843393",
  appId: "1:181699843393:web:205a67ce31a92b53897dc0",
  measurementId: "G-ZBD7GTLBQQ"

};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        window.location.href = "home.html";
    }
})



//Verificação login
function verificacao() {

    var email = window.document.getElementById("email_user").value;
    var senha = window.document.getElementById("key_user").value;

    firebase.auth().signInWithEmailAndPassword(email, senha).then(response => {
        window.location.href = "home.html";
    }).catch(error => {
        window.alert(error.code)
    })

};

