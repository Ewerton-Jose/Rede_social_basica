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

document.addEventListener("DOMContentLoaded", function(){
    firebase.auth().onAuthStateChanged((usuario) => {
        if(usuario) {
            var user = firebase.auth().currentUser.email;
            document.getElementById('dados').innerHTML = `<h1>${user}</h1>`
            console.log(usuario, user)
        } else {
            window.alert("Não Há usuário logado");
            window.location.href = "login.html";
        }
    })
})

function sair(){
    firebase.auth().signOut().then(() => {
        window.location.href = "login.html";
    })
}