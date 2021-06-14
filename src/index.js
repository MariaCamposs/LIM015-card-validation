import validator from './validator.js';

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll("input");


const expresiones = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras
    lastname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    card: /([0-9]){13,17}$/, // 13 a 18 digitos.
    month: /([0-9]){2}$/, //2 numeros
    year: /([0-9]){2}$/, //2 numeros
    cvv: /([0-9]){3}$/ // 3 numeros.
}

const campos = {
    name: false,
    lastname: false,
    card: false,
    month: false,
    year: false,
    cvv: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "name":
            validarCampo(expresiones.name, e.target, 'name');
            break;

        case "lastname":
            validarCampo(expresiones.lastname, e.target, 'lastname');
            break;

        case "card":
            validarCampo(expresiones.card, e.target, 'card');
            break;

        case "month":
            validarCampo(expresiones.month, e.target, 'month');
            break;

        case "year":
            validarCampo(expresiones.year, e.target, 'year');
            break;

        case "cvv":
            validarCampo(expresiones.cvv, e.target, 'cvv');
            break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`group__${campo}`).classList.remove('formulario__group-incorrect');
        document.getElementById(`group__${campo}`).classList.add('formulario__group-correct');
        document.querySelector(`#group__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#group__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#group__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`group__${campo}`).classList.add('formulario__group-incorrect');
        document.getElementById(`group__${campo}`).classList.remove('formulario__group-correct');
        document.querySelector(`#group__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#group__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#group__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
})

document.getElementById("send").addEventListener("click", () => {
    let card = document.getElementById('card').value;
    //validando tarjeta
    let valid = document.getElementById("text1");
    validator.isValid(card) ? (valid.innerHTML = "La tarjeta es valida") :
        (valid.innerHTML = "La tarjeta es invalida");

    if (card === '' || card == null) {
        alert('Introduzca el numero de la tarjeta')
        return false;
    }
    //enmascarando tarjeta
    if (validator.maskify(card)) {
        let valid = document.getElementById('text');
        valid.innerHTML = `${validator.maskify(card)}`
    }
    //mostrando tipo de tarjeta


    if (validator.isValid(card)) {
        if (validator.getIssuer(card)) {
            // crea un nuevo div
            // y añade contenido
            let newi = document.createElement("i");
            let img = document.createElement("img");
            img.src = (`img/${validator.getIssuer(card)}.png`);
            img.classList.add("img-card");
            newi.appendChild(img);
            document.getElementById("text").appendChild(newi);
        }
    }

    if (validator.isValid(card) == false) {
        document.getElementById("back").style.display = 'block';
        document.getElementById("buy").style.display = 'none';
    } else {
        document.getElementById("back").style.display = 'none';
        document.getElementById("buy").style.display = 'block';
    }
    document.getElementById("form").style.display = 'none';
    document.getElementById("validCard").style.display = 'block';
})

document.getElementById("back").addEventListener("click", () => {
    document.getElementById("form").style.display = 'block';
    document.getElementById("validCard").style.display = 'none';
    document.getElementById("formulario").reset();
    if (campos.name && campos.lastname && campos.card && campos.date && campos.cvv) {
        document.querySelectorAll('.formulario__group-correct').forEach((icono) => {
            icono.classList.remove('formulario__group-correct');
        });

    }
})

document.getElementById("buy").addEventListener("click", () => {
    document.getElementById("successfull").style.display = 'block';
    document.getElementById("formulario").style.display = 'none';
    document.getElementById("validCard").style.display = 'none';
})