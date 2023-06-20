const numero = 12;
const numeroDivisivelPor5 = (numero % 5) === 0;

if (numero === 0) {
  console.log('invalido');
} else if (numero === 5) {
  console.log('invalido');
} else if (numeroDivisivelPor5) {
  console.log('sim');
} else {
  console.log('não');
}