<script>
const firebaseConfig = {
            apiKey: "AIzaSyCisvjUePWPgFr2BtrqIDNak-tGGmIiesY",
            authDomain: "inspector-f0183.firebaseapp.com",
            projectId: "inspector-f0183",
            storageBucket: "inspector-f0183.appspot.com",
            messagingSenderId: "53520677791",
            appId: "1:53520677791:web:50807ecb53de66f05bdbaa",
        };
        // Inicializa o Firebase
        firebase.initializeApp(firebaseConfig);

        function login(event) {
            event.preventDefault();
            const email = document.getElementById("email").value;
            const senha = document.getElementById("senha").value;

            firebase.auth().signInWithEmailAndPassword(email, senha)
                .then((response) => {
                    console.log("success", response);
                    window.location.href = "index.html";
                })
                .catch((error) => {
                    console.log("error", error);
                    alert("Erro ao fazer login: " + error.message);
                });
        }
      </script>