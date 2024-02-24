
const btneye = document.getElementById('eyepassword');
const btnMostrar = document.getElementById('btnMostrar');
const btnMostrar2 = document.getElementById('btnMostrar2');
const btnLogin = document.getElementById('btnLogin');
let email = document.getElementById('email');
let inputPassword = document.getElementById('password');
const inputPassword2 = document.getElementById('password2');
const icon = document.getElementById('eyepassword');
const icon2 = document.getElementById('eyepassword2');
let erroremail = document.getElementById('erroremail');
let errorpassword = document.getElementById('errorpassword');
let errorpassword2 = document.getElementById('errorpassword2');

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

function mostrarPassword(pass,icono) {
    console.log('Entra a mostrar password: ');
     if (pass.value.length >  0) {
        if (pass.type == "password" && icono.classList.contains("fa-eye")) {
            pass.type = "text";
            icono.classList.replace("fa-eye", "fa-eye-slash");
        } else {
            pass.type = "password";
            icono.classList.replace("fa-eye-slash", "fa-eye");
        }
    }
}

function esCorreoValido(correo) {
    let esValido = false;
    let expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    esValido = expReg.test(correo);
    return esValido;

}


function validarPasswordVacia(pass,icono){
    if ((pass.value==='') || (!pass===null)){
        pass.type="password";
        icono.classList.replace("fa-eye-slash", "fa-eye");
    }
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

function contieneLetras(pass) {
    
    let regex = /[a-zA-Z]/;

    return regex.test(pass.value);
}

function contieneLetrasMinusculas(pass) {
    
    let regex = /[a-z]/;

    return regex.test(pass.value);
}

function contieneLetrasMayusculas(pass) {
    let regex = /[A-Z]/;

    return regex.test(pass.value);
}

function contieneNumeros(pass) {
   
    let regex = /\d/;

    return regex.test(pass.value);
}

function contieneCaracteresEspeciales(pass) {
    
    let regex = /[.!@\$%&]/;

    return regex.test(pass.value);
}

function validarPasswordIguales(pass1, pass2){
    let error = [];
   
    if (pass2.value.length==0){
        error.push('La contraseña es requerida');
    }
    console.log(pass1.value==pass2.value);
    if (pass1.value!=pass2.value){
        error.push('La contraseña de confirmación no es igual');
    }

    return error;
}

function validarPassword(pass){
  
    let error = [];
    
        if (pass.value.trim() === ''){
            error.push('La contraseña es requerida');
        }

        if (pass.value.trim().length < 8){
            error.push('Debe de tener un minimo de 8 caracteres');
        }
      
        if (!contieneLetras(pass)){
            error.push('Debe de tener letras');
        }

        if (!contieneLetrasMinusculas(pass)){
            error.push('Debe de tener al menos una letra Minúscula');
        }

        if (!contieneLetrasMayusculas(pass)){
            error.push('Debe de tener al menos una letra Mayúscula');
        }
        
        if (!contieneNumeros(pass)){
            error.push('Debe de tener al menos un número');
        }

        if (!contieneCaracteresEspeciales(pass)){
            error.push('Debe de tener al menos un caracter <br> especial [., !, @, #, $, %, &]');
        }       
        return error; 
}

function imprimirError(errores, campo){

    if (errores.length > 0){
        campo.innerHTML=errores[0];
    }
    else{
        campo.innerHTML='';
    } 
}

function validarCampos() {

   
    imprimirError(validarCampoCorreo(email), erroremail);
    imprimirError(validarPassword(inputPassword), errorpassword);
    if (inputPassword2 != null){
        imprimirError(validarPasswordIguales(inputPassword,inputPassword2), errorpassword2);
    }
    if (nomempresa != null){
        imprimirError(validarCampoEmpresa(nomempresa),errornomempresa);
    }
}

function validarFormulario() {
  

    email = document.getElementById('email');
    console.log('campo correo dentro funcion validar formulario: '+email);

    inputPassword = document.getElementById('password');
    console.log('Password: '+inputPassword.value);
    bandera = true;
    validarCampos();
}

function limpiarErrores(){
    erroremail.innerHTML='';
    errorpassword.innerHTML=''
    errorpassword2.innerHTML=''; 

}
function limpiarCampos(){
    email.value='';
    inputPassword.value='';
    inputPassword2.value='';
  
}


btnMostrar.addEventListener('click', function() {
    mostrarPassword(inputPassword, icon);
});


if (btnMostrar2){
    btnMostrar2.addEventListener('click', function() {
        mostrarPassword(inputPassword2, icon2);
    });
}

btnLogin.addEventListener('click', validarFormulario);

if (bandera){
    email.addEventListener('input',  imprimirError(validarCampoCorreo(email), erroremail));
    inputPassword.addEventListener('input', imprimirError(validarCampoCorreo(inputPassword), errorpassword));
    if (!inputPassword2===null){
        inputPassword2.addEventListener('input',  imprimirError(validarCampoCorreo(inputPassword2), errorpassword2));
    }

}
