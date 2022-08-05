var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  if (chute != numeroSecreto && chute < numeroSecreto) {
    elementoResultado.innerHTML =
      "Você errou, O numero secreto é maior que o numero escolhido.";
  } else if (chute != numeroSecreto && chute > numeroSecreto) {
    elementoResultado.innerHTML =
      "Você errou, O numero secreto é menor que o numero escolhido.";
  } else {
    elementoResultado.innerHTML = "Você acertou.";
  }
}