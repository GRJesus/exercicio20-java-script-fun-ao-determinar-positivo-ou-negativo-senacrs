//1) Crie uma função que receba um valor e informe se ele é positivo ou não.

var value = parseInt(prompt("Digite um valor positivo ou negativo"));

function result (value) {
  if (value > 0) {
  return (document.body.append("Esse numero é positivo"));
} else if (value < 0) {
  return (document.body.append("Esse numero é negativo"));
} return (document.body.append("Valor informado não é numero"));
}
result(value);
