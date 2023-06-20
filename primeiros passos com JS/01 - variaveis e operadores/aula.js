/*calcular o valor de uma viagem

3 variaveis disponiveis
  1 - preço do combustivel;
  2 - gasto medio do combustivel do carro por KM;
  3 - distancia em km da viagem;

imprima no console o valor que sera gasto para realizar esta viagem.

*/
/*entrada de dados*/
const precoCombustivel = 4.70;
const kmPorLitros = 20;
const distanciaKm = 1540;
/*fim da entrada de dados*/
const litrosConsumidos = distanciaKm / kmPorLitros;
const valorViagem = litrosConsumidos * precoCombustivel;
console.log('voce vai consumir: ', litrosConsumidos, 'valor da viagem será: ', valorViagem.toFixed(2));