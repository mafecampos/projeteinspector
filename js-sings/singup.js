import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyCisvjUePWPgFr2BtrqIDNak-tGGmIiesY",
    authDomain: "inspector-f0183.firebaseapp.com",
    projectId: "inspector-f0183",
    storageBucket: "inspector-f0183.appspot.com",
    messagingSenderId: "53520677791",
    appId: "1:53520677791:web:50807ecb53de66f05bdbaa"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const submit = document.getElementById('submit');

submit.addEventListener("click", function(event) {
    event.preventDefault();

    const email = document.getElementById('usuario').value;
    const senha = document.getElementById('senha').value;
    const confirmSenha = document.getElementById('confirmSenha').value;

    if (senha !== confirmSenha) { 
        alert("As senhas não coincidem.");
        return;
    }

    createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Conta criada com sucesso!");
            console.log('deu certo!');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
});
