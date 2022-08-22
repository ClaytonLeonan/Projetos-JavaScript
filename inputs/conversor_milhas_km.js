import entradaDados from 'readline-sync';

 console.log("Conversor de Milhas para Quilômetros: \n");

 let mi = entradaDados.question("Informe o valor em milhas");

 let km = mi / 0.62137;

 console.log(mi+" equivale a "+km+"km");
