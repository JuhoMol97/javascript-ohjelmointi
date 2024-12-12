/* Write a program that asks for the names of six dogs.
The program prints dog names to unordered list <ul> in reverse alphabetical order. (2p) */

const lista = []

for (let i = 0; i < 6; i++){
  let doge = prompt('Give dog name')
  lista.push(doge)
}

lista.sort()
lista.reverse()

for (let i = 0; i < 6; i++){
  document.querySelector('#target').innerHTML += "\n<li>" + lista[i] + '</li>'
}
