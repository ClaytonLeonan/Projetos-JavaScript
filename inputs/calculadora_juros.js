import entradaDados from 'readline-sync'

console.log("Calculadora de Juros");
let valorDivida = entradaDados.question("\nDigite o valor da divida: ");//Aqui o usuário irá colocar sua divida e o input ira guardar na variavel valorDivida
let juros; 

if(valorDivida > 0){
    let diasAtrasos = entradaDados.question("Digite os dias de atrasos apos o vencimento: "); //Aqui o usuário irá colocar os dias de atrasos
    if(diasAtrasos > 0){
        if(diasAtrasos > 15){
            juros = 10;
        }
        else{
            juros = 5;
        }

        let valorJuros = (valorDivida / 100) * juros;
        let dividaTotal = Number(valorDivida) + Number(valorJuros);
        
        console.log(`\nSua divida atual é de: R$ ${valorDivida}`);
        console.log(`Os dias de atraso é de: ${diasAtrasos} dias`);
        console.log(`A taxa de juros de: ${juros}%`);
        console.log(`Sua divida total é de: R$ ${dividaTotal}`);

    }
    else{
        console.log(`suas dividas estao em dias`)
    }
}
else{
    console.log(`Você precisa ter uma divida maior que 0`)
}



