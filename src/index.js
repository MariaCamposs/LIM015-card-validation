import validator from './validator.js';
/*
const inputs = document.querySelectorAll('#form input');

const expresiones = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras, numeros, guion y guion_bajo
    lastname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    card: /([0-9]){13,17}$/, // 13 a 15 digitos.
    date: /([0-9]){4}$/, //4 numeros
    cvv: /([0-9]){3}$/ // 7 a 14 numeros.
}*/

document.getElementById("send").addEventListener("click", () => {
    let card = document.getElementById('card').value;

    if (validator.isValid(card)) {
        let valid = document.getElementById("text1");
        valid.innerHTML = 'La tarjeta es valida'
    } else if (card === '') {
        alert('Introduzca el numero de la tarjeta')
    } else {
        let error = document.getElementById('text1');
        error.innerHTML = 'La tarjeta es invalida'
    }
    if (validator.maskify(card)) {
        let valid = document.getElementById('text');
        valid.innerHTML = `${validator.maskify(card)}`
    }

    if (validator.isValid(card)) {
        document.getElementById("back").style.display = 'none';
        document.getElementById("buy").style.display = 'block';
    } else {
        document.getElementById("back").style.display = 'block';
        document.getElementById("buy").style.display = 'none';
    }
    document.getElementById("formulario").style.display = 'none';
    document.getElementById("validCard").style.display = 'block';
})

document.getElementById("back").addEventListener("click", () => {
    document.getElementById("formulario").style.display = 'block';
    document.getElementById("validCard").style.display = 'none';
    document.getElementById("form").reset();
})

document.getElementById("buy").addEventListener("click", () => {
    document.getElementById("successful").style.display = 'block';
    document.getElementById("formulario").style.display = 'none';
    document.getElementById("validCard").style.display = 'none';
})