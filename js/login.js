//const pagina = document.getElementById('pagina').value;
const btneye = document.getElementById('eyepassword');
const btnMostrar = document.getElementById('btnMostrar');
const btnLogin = document.getElementById('btnLogin');
let email = document.getElementById('email');
let inputPassword = document.getElementById('password');
const icon = document.getElementById('eyepassword');
let erroremail = document.getElementById('erroremail');
let errorpassword = document.getElementById('errorpassword');

let usuario = 'admin@gmail.com'
let clave = 'Admin.123!'



let bandera = false;
let validar = true;


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
        error.push('Ingrese un correo valido <br> con formato nombre@ejemplo.com');
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

function existeUsuarioPasswor(user, pass){
    console.log('Entra a la funcion existeUsuarioPasswor ');
    console.log('Usuario: '+ user.value);
    console.log('Password: '+pass.value);
    if (user.value === usuario && pass.value === clave ){
        console.log(user.value);
        console.log(pass.value === clave );
        console.log('valor regresado de existeUsuarioPasswor true');
        return true;
    }
    console.log('valor regresado de existeUsuarioPasswor falso');
    return false;
}

function validarUsuarioPasswor(user,pass){
    
    let error = [];
    
    if (pass.value.trim() === ''){
        error.push('La contraseña es requerida');
        validar=false
    }
    if (existeUsuarioPasswor(user,pass)===false) {
        error.push('El usuario o password no existe');
        validar=false;
        
    }
    return error;
}

function validarPassword(pass){
  
    let error = [];
    validar=true;
        if (pass.value.trim() === ''){
            error.push('La contraseña es requerida');
            validar=false
        }

        if (pass.value.trim().length < 8){
            error.push('Debe de tener un minimo de 8 caracteres');
            validar=false
        }
      
        if (!contieneLetras(pass)){
            error.push('Debe de tener letras');
            validar=false
        }

        if (!contieneLetrasMinusculas(pass)){
            error.push('Debe de tener al menos una letra Minúscula');
            validar=false
        }

        if (!contieneLetrasMayusculas(pass)){
            error.push('Debe de tener al menos una letra Mayúscula');
            validar=false
        }
        
        if (!contieneNumeros(pass)){
            error.push('Debe de tener al menos un número');
            validar=false
        }

        if (!contieneCaracteresEspeciales(pass)){
            error.push('Debe de tener al menos un caracter <br> especial [., !, @, #, $, %, &]');
            validar=false
        }  
        
        
        return error; 
}

function imprimirError(errores, campo){

    if (errores != undefined){
        console.log(errores);
        if (errores.length > 0){
            campo.innerHTML=errores[0];
        }
        else{
            campo.innerHTML='';
        } 
    }
    else{
        campo.innerHTML='';
    }
    
}

function validarCampos() {

   
    imprimirError(validarCampoCorreo(email), erroremail);
    imprimirError(validarPassword(inputPassword), errorpassword);
    imprimirError(validarUsuarioPasswor(email,inputPassword),errorpassword);
    
}

function validarFormulario() {
  

    email = document.getElementById('email');

    inputPassword = document.getElementById('password');
    bandera = true;
    validarCampos();

    if (validar == true){
        window.location.href = "vistaEventos.html";
    }
    console.log('validar: ' + validar);
}

function limpiarErrores(){
    erroremail.innerHTML='';
    errorpassword.innerHTML=''

}
function limpiarCampos(){
    email.value='';
    inputPassword.value='';
}


btnMostrar.addEventListener('click', function() {
    mostrarPassword(inputPassword, icon);
});



btnLogin.addEventListener('click', validarFormulario);

if (bandera){
    email.addEventListener('input',  imprimirError(validarCampoCorreo(email), erroremail));
    inputPassword.addEventListener('input', imprimirError(validarPassword(inputPassword), errorpassword));

}
