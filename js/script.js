// Componentes de la tarjeta
const tarjetaNumero = document.querySelector('#tarjetaFrontalNumero');
// Inputs
const iCardNumber = document.querySelector('#cardnumber'); // retorna un objeto input
const iCardHolder = document.querySelector('#cardholder');
const iCVC = document.querySelector('#cvc');
// Errores
const eCardNumber = document.querySelector('#errorCardNumber');
// Botones
const bConfirm = document.querySelector('#btnConfirm');
const bContinue = document.querySelector('#btnContinue');
// Secciones
const sCompletado = document.querySelector('#seccionCompletado');
const sFormulario = document.querySelector('#seccionFormulario');

iCardNumber.oninput = function (event) {
    tarjetaNumero.innerHTML = event.target.value;
}

bConfirm.onclick = function (event) {
    // Se declarar un array para almacenar los errores
    const erroresCardNumber = [];
    const erroresCardHolder = [];
    const erroresCVC = [];
    const erroresMM = [];
    const erroresYY = [];

    // Se limpian los errores
    eCardNumber.innerHTML = '';

    if (iCardNumber.value.length == 0) {
        erroresCardNumber.push('Este campo no debe estar vacío');
    }

    if (iCardNumber.value.length != 16) {
        erroresCardNumber.push('El número de tarjeta debe tener 16 dígitos');
    }

    if (isNaN(iCardNumber.value)) {
        erroresCardNumber.push('Este campo solo acepta números');
    }

    // Se iteran los errores para mostrarlos en el HTML
    for (let i = 0; i < erroresCardNumber.length; i++) {
        eCardNumber.innerHTML += `<p>${erroresCardNumber[i]}</p>`;
    }

    // Se valida si los arrays de errores están vacíos
    if (erroresCardNumber.length == 0 && erroresCardHolder.length == 0  && 
        erroresCVC.length == 0 && erroresMM.length == 0 && erroresYY.length == 0) {
        sCompletado.classList.remove('oculto');
        sFormulario.classList.add('oculto');
    }
}

bContinue.onclick = function (event) {
    sCompletado.classList.add('oculto');
    sFormulario.classList.remove('oculto');
}

iCVC.onkeypress = function (event) {
    return !isNaN(event.key);
}

// iCardNumber.onkeypress = function (event) {
//     return !isNaN(event.key);
// }










