/* Write a function that returns a random dice roll between 1 and 6.
The function should not have any parameters.
Write a main program that rolls the dice until the result is 6.
The main program should print out the result of each roll in an unordered list (<ul>). (2p) */

function heitanoppa(){
  return Math.floor(Math.random() * 6) + 1;
}

while (true){
  let noppa = heitanoppa()
  document.querySelector('#target').innerHTML += "\n<li>" + noppa + "</li>"
  if (noppa === 6){
    break;
  }
}
