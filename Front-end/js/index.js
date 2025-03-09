// Função para simular o login
function login() {
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    // Simples validação (substitua por uma real depois)
    if (user === "admin" && pass === "1234") {
        // Salva o estado do login no localStorage
        localStorage.setItem("loggedIn", "true");

        // Esconde login
        document.getElementById("login-container").style.display = "none";
        // Mostra home
        document.getElementById("home-container").style.display = "block";
    } else {
        alert("Usuário ou senha incorretos!");
    }
}

// Função para fazer logout
function logout() {
    // Remove o estado de login no localStorage
    localStorage.removeItem("loggedIn");

    // Esconde home
    document.getElementById("home-container").style.display = "none";
    // Mostra login
    document.getElementById("login-container").style.display = "block";
}

// Função para exibir a mensagem de manutenção
function displayMaintenance() {
    alert("EM MANUTENÇÃO");
}

// Função para verificar o estado do login ao carregar a página
function checkLoginStatus() {
    // Log para verificar o valor armazenado no localStorage
    console.log("Estado de login:", localStorage.getItem("loggedIn"));

    if (localStorage.getItem("loggedIn") === "true") {
        // Se o usuário estiver logado, mostra a tela inicial
        document.getElementById("login-container").style.display = "none";
        document.getElementById("home-container").style.display = "block";
    } else {
        // Caso contrário, mostra a tela de login
        document.getElementById("login-container").style.display = "block";
        document.getElementById("home-container").style.display = "none";
    }
}

// Chama a função checkLoginStatus ao carregar a página
window.onload = checkLoginStatus;

import app from "./firebase.js";

console.log("Firebase conectado:", app);

