/* Write a program that rolls user defined number of dice and displays
the sum of the results of the dice rolls.(2p)

First, program asks the user for the number of dice rolls.
Then the program throws a die as many times as the user defined.
Print the sum of the results in the console or in the HTML document. */

const nopat = parseInt(prompt("Anna noppien määrä:"));
let yht = 0

for (let i = 0; i < nopat; i++) {
    const noppa = Math.floor(Math.random() * 6) + 1;
    yht += noppa
}

document.querySelector('#target').innerHTML = 'You rolled ' + nopat + ' dies and their sum is ' + yht + '!';
