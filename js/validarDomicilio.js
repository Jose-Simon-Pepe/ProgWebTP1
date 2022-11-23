function validarNuevoDomicilio(){
  
    var regexTelefono = /^[0-9]{10,14}$/
    var regexPiso = /^[0-9]{2}$/
    var error = false;
    var mensajesError = " ";
    var provincia = document.getElementById("provincia").value;
    var localidad = document.getElementById("localidad").value;


    if(document.getElementById("alias").value.length == 0){
        error = true;
        mensajesError += "<p>Alias no puede estar vacio </p>";
    }
    if(document.getElementById("provincia").value == 0){
        error = true;
        mensajesError += "<p>Provincia no puede estar vacio </p>";

    }

    if(document.getElementById("localidad").value ==0){
        error = true;
        mensajesError += "<p>Localidad no puede estar vacio </p>";

    }
    if(provincia == 1 && (localidad== 5 ||localidad== 6 || localidad== 7)){
        error = true;
        mensajesError += "<p>Provincia de Buenos Aires no tiene esa localidad</p>";
    }

    if(provincia == 2 && (localidad== 1 || localidad == 2 || localidad == 3 || localidad == 4)){
        error = true;
        mensajesError += "<p>Capital Federal no tiene esa localidad</p>";
    }

    if(document.getElementById("direccion").value == ""){
        error = true;
        mensajesError += "<p>Dirección no puede estar vacio </p>";
    }

    if(!regexTelefono.test(document.getElementById("telefono").value)){
        error = true;
        mensajesError += "<p>Numero de telefono inválido </p>";

    }

    if(!regexPiso.test(document.getElementById("piso").value)){
        error = true;
        mensajesError += "<p>Numero de piso es inválido </p>";
    }

    if(document.getElementById("dto").value.length ==0){
        error = true;
        mensajesError += "<p>El depto no puede estar vacio </p>";
    }

    if(error){
        document.getElementById("mensaje").innerHTML = mensajesError;
        console.log("estoy aqui")
        return false;

    }else{
        mensajesError =" ";
        document.getElementById("mensaje").innerHTML =mensajesError;
        return true;
    }

    
}



