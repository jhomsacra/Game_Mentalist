var numeroSecreto = parseInt(Math.random() * 1001);

while (chute != numeroSecreto) {
  var chute = prompt('Digite um número entre 0 e 1000');

  // Se o chute for igual ao número secredo
  if (chute == numeroSecreto){
      alert ('Acertou!')
  } else if (chute > numeroSecreto) {
      alert ('Errou... O número secreto é menor.')
  } else if (chute < numeroSecreto) {
    alert ('Errou...O número secreto é maior')
  }
}