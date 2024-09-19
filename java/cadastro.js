import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-database.js";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCisvjUePWPgFr2BtrqIDNak-tGGmIiesY",
  authDomain: "inspector-f0183.firebaseapp.com",
  projectId: "inspector-f0183",
  storageBucket: "inspector-f0183.appspot.com",
  messagingSenderId: "53520677791",
  appId: "1:53520677791:web:50807ecb53de66f05bdbaa",
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

// Adiciona o listener ao botão de cadastro
document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();

  // Obtém os valores dos campos do formulário
  const email = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  const confirmSenha = document.getElementById("confirmSenha").value;

  // Verifica se as senhas coincidem
  if (senha !== confirmSenha) {
    alert("As senhas não coincidem!");
    return;
  }

  // Cria o usuário no Firebase Authentication
  createUserWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      const user = userCredential.user;

      // Salva os dados adicionais no Firebase Realtime Database
      set(ref(database, "users/" + user.uid), {
        email: email,
        // Adicione outros dados que deseja salvar aqui
      })
        .then(() => {
          alert("Conta criada e dados salvos com sucesso!");
          window.location.href = "index.html";
        })
        .catch((error) => {
          alert("Erro ao salvar os dados: " + error.message);
        });
    })
    .catch((error) => {
      alert("Erro ao criar conta: " + error.message);
    });
});
