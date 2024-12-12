const answer = confirm("Should I calculate the square root?");

if (answer) {
    const numero = parseInt(prompt("Anna numero:"));
    const neliojuuri = Math.sqrt(numero);
    document.querySelector('#target').innerHTML = 'The squareroot is ' + neliojuuri;
} else {
    document.querySelector('#target').innerHTML = 'The squareroot is not calculated.';
}
