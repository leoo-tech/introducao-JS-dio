/* 1 - debito - 10%
  2 - pix ou dinheiro - 15%
  3 - 2x credito - normal s juros
  4 - acima de 2x credito - normal + juros 10%
*/


const precoEtiqueta = 100;
const pagamento = 4;

if (pagamento === 1) {
  console.log('O valor da etiqueta é ', precoEtiqueta - (precoEtiqueta * 0.1));
} else if (pagamento === 2) {
  console.log('O valor da etiqueta é ', precoEtiqueta - (precoEtiqueta * 0.15));
} else if (pagamento === 3) {
  console.log('O valor da etiqueta é ', precoEtiqueta);
} else if (pagamento === 4) {
  console.log('O valor da etiqueta é ', precoEtiqueta + (precoEtiqueta * 0.1))
}