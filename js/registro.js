const pagina = document.getElementById('pagina').value;
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
let nomempresa = document.getElementById('nomempresa');
let errornomempresa = document.getElementById('errornomempresa');
const divempresa = document.getElementById('empresa');
let bandera = false;
const rdbUsuario = document.getElementById('rdbUsuario');

let chkCondicionUso = document.getElementById('checkCondicion');
const infocondicion = document.getElementById('infocondicion');


const rdbPromotor = document.getElementById('rdbPromotor');
let checkUsuario =  document.querySelector('input[name="rdbUsuario"]:checked');



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

function validarCampoEmpresa(empresa){
    console.log('Entra a validar la empresa');
    let error=[];
    if (empresa.value.trim() === '') {
        error.push('El nombre de empresa es requerido');
    }
    console.log('Longitud empresa: '+empresa.value.length);
    if (empresa.value.length<2) {
        error.push('La longitud del nombre de la empresa <br> debe de ser mayor o igual a <br> dos caractes');
    }
    return error;
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

function validarCondicionUso(chk){
    let error = [];
    if (!chk.checked){
        error.push('Debe aceptar las condiciones de uso');
    }
    return error;
}

function imprimirError(errores, campo){

    console.log('Errores: '+ errores);
    console.log('campo: ' + campo);
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

    imprimirError(validarCondicionUso(chkCondicionUso),infocondicion);
}

function validarFormulario() {
  

    email = document.getElementById('email');
  

    inputPassword = document.getElementById('password');
    console.log('Password: '+inputPassword.value);

    chkCondicionUso = document.getElementById('checkCondicion');
    bandera = true;
    validarCampos();
}

function limpiarErrores(){
    erroremail.innerHTML='';
    errorpassword.innerHTML=''
    errorpassword2.innerHTML=''; 
    errornomempresa.innerHTML='';
}
function limpiarCampos(){
    email.value='';
    inputPassword.value='';
    inputPassword2.value='';
    nomempresa.value='';
}

function seleccionUsuario(){
   checkUsuario = document.querySelector('input[name="rdbUsuario"]:checked')

   limpiarErrores();
   limpiarCampos();

   if (checkUsuario.value == 'usuario'){
        divempresa.style.display='none';
   }
   
   if (checkUsuario.value == 'promotor'){
        divempresa.style.display='block';
   }
}

//if (!rdbUsuario===null){
    console.log('entra clic rdbUsuario');
    rdbUsuario.addEventListener('click', seleccionUsuario);
//}
//if (!rdbPromotor===null){
    console.log('entra clic rdbPromotor');
    rdbPromotor.addEventListener('click', seleccionUsuario);
//}

btnMostrar.addEventListener('click', function() {
    mostrarPassword(inputPassword, icon);
});


if (btnMostrar2){
    btnMostrar2.addEventListener('click', function() {
        mostrarPassword(inputPassword2, icon2);
    });
}

/*
chkCondicionUso.addEventListener('click', function() {

    //
  })
  */

btnLogin.addEventListener('click', validarFormulario);

if (bandera){
    email.addEventListener('input',  imprimirError(validarCampoCorreo(email), erroremail));
    inputPassword.addEventListener('input', imprimirError(validarCampoCorreo(inputPassword), errorpassword));
    if (!inputPassword2===null){
        inputPassword2.addEventListener('input',  imprimirError(validarCampoCorreo(inputPassword2), errorpassword2));
    }

}

