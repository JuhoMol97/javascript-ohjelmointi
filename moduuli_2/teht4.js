/* Write a program that asks the user for numbers until he gives zero.
The given numbers are printed in the console from the largest to the smallest. (2p) */

const lista = [];
let number = 1;

while (number !== 0){
  number = parseInt(prompt("Anna numero"));
  lista.push(number);
}

lista.sort(function(a, b){return b - a});

for (let i = 0; i < lista.length; i++){
  console.log(lista[i])
}
