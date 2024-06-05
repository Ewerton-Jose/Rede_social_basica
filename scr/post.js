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
            console.log(usuario)
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

function publicar(){
    //verificar na pag perfil com .email
    const conteudo = {
        
        avaliacao: 4,
        desc: "1",//document.getElementById("desc").value,
        foto: "2",//document.getElementById("foto").value,
        titulo: "3",//document.getElementById("titulo").value,
        uid: firebase.auth().currentUser.uid
    }

    
    firebase.firestore().collection("conteudo").add(conteudo)
    .then(() => {
        console.log("Documento adicionado com sucesso.");
    })
    .catch((error) => {
        console.error("Erro ao adicionar documento: ", error);
        alert("Erro ao adicionar documento: " + error.message);
    });

}