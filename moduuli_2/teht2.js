/* Write a program that asks the user for the number of participants.
After this, the program asks for the names of all participants.
Finally, the program prints the names of the participants on the web
page in an ordered list (<ol>) in alphabetical order. (2p) */

const participants = parseInt(prompt("Number of participants"))
let lista = []

for (let i = 0; i < participants; i++){
  let osallistuja = prompt(("Name of the participant"))
  lista.push(osallistuja)
}

lista.sort()

for (let i = 0; i < participants; i++){
  document.querySelector('#target').innerHTML += '\n<li>' + lista[i] + '</li>'
}
