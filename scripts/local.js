// Valores estáticos (serão substituídos por dados de uma API no próximo curso)
const temperatura = 8;      // °C
const velocidadeVento = 10; // km/h

// Fórmula métrica (°C e km/h), em uma única linha de retorno
function calcularSensacaoTermica(temp, vento) {
  return 13.12 + 0.6215 * temp - 11.37 * Math.pow(vento, 0.16) + 0.3965 * temp * Math.pow(vento, 0.16);
}

function exibirSensacao() {
  const saida = document.getElementById("sensacao");
  // Só calcula se temp <= 10 °C e vento > 4,8 km/h
  if (temperatura <= 10 && velocidadeVento > 4.8) {
    saida.textContent = `${calcularSensacaoTermica(temperatura, velocidadeVento).toFixed(1)} °C`;
  } else {
    saida.textContent = "N/A";
  }
}

document.getElementById("temperatura").textContent = temperatura;
document.getElementById("vento").textContent = velocidadeVento;
exibirSensacao();

// Rodapé: ano atual e última modificação
document.getElementById("anoatual").textContent = new Date().getFullYear();
document.getElementById("ultimaModificacao").textContent = `Última modificação: ${document.lastModified}`;