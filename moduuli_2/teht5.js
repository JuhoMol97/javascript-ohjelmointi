/* Write a program that prompts the user for numbers.
When the user enters one of the numbers he previously entered,
the program will announce that the number has already been given and stops
its operation and then prints all the given numbers to the console in ascending order. (2p) */

const lista = []

while (true){
  number = parseInt(prompt("Anna numero"));
  if (lista.includes(number)){
    alert("number " + number + " is already in the list")
    break;
  }
  lista.push(number)
}

lista.sort()

for (let i = 0; i < lista.length; i++){
  console.log(lista[i])
}
