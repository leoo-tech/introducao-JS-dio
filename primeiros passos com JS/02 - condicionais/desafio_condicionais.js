const precoEtanol = 3.75;
const precoGasolina = 5.75;
const kmPorLitros = 10;
const distanciaKm = 100;
const tipoCombustivel = 'gasolina';

const litrosConsumidos = distanciaKm / kmPorLitros;

if (tipoCombustivel === 'etanol') {
  const valorGasto = litrosConsumidos * precoEtanol;
  console.log('voce vai consumir: ', litrosConsumidos + ' litros', 'valor da viagem será: ', valorGasto.toFixed(2));
} else {
  const valorGasto = litrosConsumidos * precoGasolina;
  console.log('voce vai consumir: ', litrosConsumidos + ' litros', 'valor da viagem será: ', valorGasto.toFixed(2));
}
