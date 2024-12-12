const vuosi = parseInt(prompt("Anna vuosi:"));

if (vuosi % 4 === 0) {
    if (vuosi % 100 === 0 && vuosi % 400 !== 0) {
        document.querySelector('#target').innerHTML = 'Vuosi ' + vuosi + ' ei ole karkausvuosi.';
    } else {
        document.querySelector('#target').innerHTML = 'Vuosi ' + vuosi + ' on karkausvuosi.';
    }
} else {
    document.querySelector('#target').innerHTML = 'Vuosi ' + vuosi + ' ei ole karkausvuosi.';
}
