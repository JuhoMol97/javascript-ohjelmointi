/* Write a program that prompts the user for the start and end year.
The program prints all leap years from the interval given by the user.
Printing is done in an unordered list to the HTML document. (3p) */

const alkuvuosi = parseInt(prompt("Anna alkuvuosi"));
const loppuvuosi = parseInt(prompt("Anna loppuvuosi"));

function karkausvuosi(vuosi){
    if (vuosi % 4 === 0) {
        if (vuosi % 100 === 0 && vuosi % 400 !== 0) {
            return false
        } else {
            return true
        }
    } else {
        return false
    }
}

for (let i = alkuvuosi; i <= loppuvuosi; i++){
    if (karkausvuosi(i)){
      document.querySelector('#target').innerHTML += "\n<li>" + i + "</li>"
    }
}
