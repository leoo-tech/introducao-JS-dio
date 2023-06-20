const peso = 80;
const altura = 1.80;
const imc = peso / Math.pow(altura, 2);
console.log(`Seu IMC é ${imc.toFixed(2)}`);
if (imc < 18.5) {
  console.log('está abaixo do peso ');
} else if (imc >= 18.5 && imc < 25) {
  console.log("seu peso está normal");
} else if (imc >= 25 && imc < 30) {
  console.log("voce esta acima da media de peso ");
} else if (imc >= 30 && imc < 40) {
  console.log("você esta com obesidade grau I");
} else {
  console.log('você esta com obesidade grau II');
}
