const lista = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"];
const nimi = prompt('Type your name.');

const valinta = Math.floor(Math.random() * 4);

document.querySelector('#target').innerHTML = nimi + ', you are ' + lista[valinta] + '!';
