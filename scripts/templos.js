// ===== Rodapé: ano atual e última modificação =====
document.querySelector("#anoatual").textContent = new Date().getFullYear();
document.querySelector("#ultimaModificacao").textContent =
    new Date(document.lastModified).toLocaleString("pt-BR");

// ===== Menu hamburguer =====
const botaoMenu = document.querySelector("#menu");
const menuNav = document.querySelector("#menu-nav");

botaoMenu.addEventListener("click", () => {
    // Alterna a classe "open" e guarda se o menu ficou aberto
    const aberto = menuNav.classList.toggle("open");

    // ☰ quando fechado, ✕ quando aberto
    botaoMenu.textContent = aberto ? "✕" : "☰";
    botaoMenu.setAttribute("aria-expanded", aberto);
    botaoMenu.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
});