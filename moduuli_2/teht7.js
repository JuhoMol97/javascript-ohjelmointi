/* Modify the function above so that it gets the number of sides on the dice as a parameter.
With the modified function you can for example roll a 21-sided role-playing dice.
The difference to the last exercise is that the dice rolling in the main program continues
until the program gets the maximum number on the dice, which is asked from the user at the beginning. (2p) */

function heitanoppa(silmaluku){
  return Math.floor(Math.random() * silmaluku) + 1;
}

let nopansuuruus = parseInt(prompt("Anna nopan silmäluku"))

while (true){
  let noppa = heitanoppa(nopansuuruus)
  document.querySelector('#target').innerHTML += "\n<li>" + noppa + "</li>"
  if (noppa === nopansuuruus){
    break;
  }
}
