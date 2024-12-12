const num1 = parseInt(prompt("Anna numero 1:"));
const num2 = parseInt(prompt("Anna numero 2:"));
const num3 = parseInt(prompt("Anna numero 3:"));

const summa = num1 + num2 + num3;
const kerto = num1 * num2 * num3;
const keskiarvo = summa / 3;

document.querySelector('#summa').innerHTML = "Summa: " + summa;
document.querySelector('#kerto').innerHTML = "Tulo: " + kerto;
document.querySelector('#keskiarvo').innerHTML = "Keskiarvo: " + keskiarvo;
