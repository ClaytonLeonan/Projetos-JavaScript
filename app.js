alert('Bem vindo ao jogo do numero secreto');

let numeroMutiplicador = 200;
let numeroMinimo = 1;
let numeroSecreto = parseInt( Math.random() * numeroMutiplicador + 1 );
let chute;
let tentativas = 1;

console.log(numeroSecreto);

while ( chute != numeroSecreto){
    chute = prompt(`Escolha um numero entre ${numeroMinimo} e ${numeroMutiplicador}`);

    if (chute == numeroSecreto){
        break;
    } else { 
            if (chute > numeroSecreto){
            alert(`O numero secreto é menor que o numero ${chute}`);
            } else {
        alert(`O numero secreto é maior que o numero ${chute}`);
                }
                tentativas++
        }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns, você acertou o numero secreto ${chute} com ${tentativas} ${palavraTentativa}!` );

//if (tentativas > 1){
//    alert(`Parabéns, você acertou o numero secreto ${chute} com ${tentativas} tentativas!` );
//} else {
//    alert(`Parabéns, você acertou o numero secreto ${chute} com apenas ${tentativas} tentativa!` );
//}


  