function cadastrar() {
    var nome = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("password").value;

    if (nome && email && senha) {
        alert("Cadastro realizado com sucesso!");
        
        // Aguardar um tempo antes de redirecionar
        setTimeout(function() {
            window.location.href = "index-2.html"; // Redireciona para a página de login
        }, 1000); // Redireciona após 1 segundo
    } else {
        alert("Preencha todos os campos!");
    }
}
import app from "./firebase.js";

// Aqui você pode adicionar funções de autenticação, banco de dados, etc.
console.log("Firebase carregado no cadastro");
