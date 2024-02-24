
const btnRecuperar = document.getElementById('btnRecuperar');
let email = document.getElementById('email');
let erroremail = document.getElementById('erroremail');
console.log('erroremail: ' + erroremail);



let bandera = false;


/*
switch (pagina) {
    case "login":
        console.log(pagina);
        break;
    case "usuario":
        console.log(pagina);
        break;
    case "signup":
        console.log(pagina);
        break;
    case ""
    case "recuperarpass":
        console.log(pagina)
    break;


}
*/


function esCorreoValido(correo) {
    let esValido = false;
    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    esValido = expReg.test(correo);
    return esValido;

}

function validarCampoCorreo(correo){
    console.log('Validar campo correo: '+correo);

    let error=[];
    if (correo.value.trim() === '') {
        error.push('El correo es requerido');
    }
    if (!esCorreoValido(correo.value.trim())) {
        error.push('Ingrese un correo valido');
    }
    return error;

}

function imprimirError(errores, campo){

    console.log('Errores: '+errores);

    if (errores.length > 0){
        campo.innerHTML=errores[0];
    }
    else{
        campo.innerHTML='';
    } 
}
/*
function validarCampos() {
    imprimirError(validarCampoCorreo(email), erroremail);
    
}
*/

function validarFormulario() {
  

    email = document.getElementById('email');
    console.log('error email: '+erroremail)
    bandera = true;
    imprimirError(validarCampoCorreo(email), erroremail);
}

function limpiarErrores(){
    erroremail.innerHTML='';

}
function limpiarCampos(){
    email.value='';

}




btnRecuperar.addEventListener('click', validarFormulario);

if (bandera){
    email.addEventListener('input',  imprimirError(validarCampoCorreo(email), erroremail));

}
