/*
        Email id new-email
        Nombre id="new-name"
        Apellido id= "new-secondaryname"
        Contraseña id="new-pass"
        Repetir contraseña id="new-pass-again"
*/

function validarCrearUsuario(){
    
    var regexContrasenia = /^[A-Z](?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]{7,15}$/
    var regexMail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/
    var regexTexto = /^[a-zA-Z]+$/

    var error = false;
    var mensajesError = "";

    var contraseniaIngresada = document.getElementById("new-pass").value;

    if(!regexMail.test(document.getElementById("new-email").value)){
        error=true;
        mensajesError += "<p>Tiene que ser un email válido.</p>";
    }

    if(!regexTexto.test(document.getElementById("new-name").value)){
        error = true;
        mensajesError += "<p>El nombre solo tiene que incluir letras</p>";

    }

    if(!regexTexto.test(document.getElementById("new-secondaryname").value)){
        error = true;
        mensajesError += "<p>El apellido solo tiene que incluir letras</p>";

    }

    if(!regexContrasenia.test(contraseniaIngresada)){
        error = true;
        mensajesError += "<p>La contraseña debe tener como mínimo 8 caracteres, iniciar con una mayuscula y tener almenos un numero</p>";

    }

    if(contraseniaIngresada != document.getElementById("new-pass-again").value){
        error = true;
        mensajesError +="<p>No es la misma contrasenia</p>";

    }

    if(error){
        document.getElementById("mensaje").innerHTML = mensajesError;
        return false;

    }else{
        mensajesError =" ";
        document.getElementById("mensaje").innerHTML =mensajesError;
        
        return true;
    }


 

}