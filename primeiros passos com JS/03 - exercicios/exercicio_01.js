const nota1 = 10;
const nota2 = 6;
const nota3 = 9;
const media = (nota1 + nota2 + nota3) / 3;
console.log(media.toFixed(2));

if (media < 5) {
  console.log("Reprovado");
} else if (media >=5 && media <=7) {
  console.log('Recuperação');
} else{
  console.log('Aprovado')
}