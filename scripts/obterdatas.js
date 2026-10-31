// Ano atual no rodapé
const anoAtual = document.querySelector("#anoatual");
const hoje = new Date();
anoAtual.textContent = hoje.getFullYear();

// Data da última modificação no formato brasileiro
const ultimaModificacao = document.querySelector("#ultimaModificacao");
const dataModificacao = new Date(document.lastModified);
ultimaModificacao.textContent = `Última modificação: ${dataModificacao.toLocaleString("pt-BR")}`;