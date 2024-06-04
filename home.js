
const firebaseConfig = {
    apiKey: "AIzaSyDxIcGHc8vNTQOtA86VEzzmXmeYnogEFk8",
    authDomain: "biblioteca-c1700.firebaseapp.com",
    projectId: "biblioteca-c1700",
    storageBucket: "biblioteca-c1700.appspot.com",
    messagingSenderId: "181699843393",
    appId: "1:181699843393:web:205a67ce31a92b53897dc0",
    measurementId: "G-ZBD7GTLBQQ"
};

// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

// Inicialize o Firestore
const db = firebase.firestore();

//Verificação se o user está conectado
document.addEventListener("DOMContentLoaded", function(){
    firebase.auth().onAuthStateChanged((usuario) => {
        if(usuario) {
            console.log('usuario', usuario);
        } else {
            window.alert("Não Há usuário logado");
            window.location.href = "login.html";
        }
    })
})

//Sair da conta
function sair(){
    firebase.auth().signOut().then(() => {
        window.location.href = "login.html";
    })
}


//Achando o conteúdo no Firestore e printando
function acharConteudo() {
  var escrever = document.getElementById("cancro");
  firebase.firestore().collection('conteudo')
  .get()
  .then(snapshot => {
      const pessoas = snapshot.docs.map(doc => doc.data());
      pessoas.forEach(pessoa => {
      escrever.innerHTML += `<div class="card mb-3" style="max-width: 540px; margin: 30px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${pessoa.foto}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${pessoa.titulo}</h5>
            <p class="card-text">${pessoa.desc}</p>
            <div class="nota">
              média: ${pessoa.avaliacao} <br>
              <label for="exampleFormControlSelect1">Vote neste comentário</label>
              <select class="form-control" style="width: 50px;" id="exampleFormControlSelect1">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
              </select>
              <button >Enviar</button>
            </div>
            <p class="card-text"><small class="text-muted">Last updated ${pessoa.criacao} ago por @nome_user </small></p>
          </div>
        </div>
      </div>
    </div>`;
      });
    })
  }

