/* 
a. No se debe aceptar el número de tarjeta 0.
b. El número de tarjeta debe tener 10 dígitos.
i.
Si el dígito 10 es par, la suma de los primeros 9 debe dar un número impar
sino muestra el mensaje “numero de tarjeta inválida”
ii.
Si el dígito 10 es impar, la suma de los primeros 9 debe dar un número par
sino muestra el mensaje “numero de tarjeta inválida

    Número de tarjeta id="new-card-number" 
    Código id="new-card-code" 
    Vencimiento id="new-card-expiration"
    Titular id="new-card-holder"

 */

function validarMetodoDePago() {
    var regexNumeroDeTarjeta = /^[0-9]{10}$/
    var regexCodigo = /^[0-9]{3}$/
    var regexTitular = /^[A-Za-z][a-zA-Z\s]+$/

    var nroTarjeta = document.getElementById("new-card-number").value;
    console.log(nroTarjeta);
    var ultimaCifra = nroTarjeta % 10;

    var error = false;
    var mensajesError = " ";

    var result = 0;


    // console.log(document.getElementById("new-card-alias").value);

    if (document.getElementById("new-card-alias").value == 0) {
        error = true;
        mensajesError += "<p>Alias no puede estar vacio </p>"
    }

    if (!regexNumeroDeTarjeta.test(nroTarjeta)) {

        error = true;
        mensajesError += "<p>Numero de tarjeta inválida.</p>";

    } else if (ultimaCifra % 2 == 0) {
        while (nroTarjeta > 0) {
            nroTarjeta = Math.trunc(nroTarjeta / 10);
            result += nroTarjeta % 10;
        }
        if (result % 2 == 0) {
            error = true;
            mensajesError += "<p>Numero de tarjeta inválida. La ultima cifra es par y la suma es par.</p>";
        } else {
            error = false;
        }
    } else if (ultimaCifra % 2 != 0) {
        while (nroTarjeta > 0) {
            nroTarjeta = Math.trunc(nroTarjeta / 10);
            result += nroTarjeta % 10;
        }
        if (result % 2 == 0) {
            error = false;
        } else {
            error = true;
            mensajesError += "<p>Numero de tarjeta inválida.La ultima cifra es impar y la suma tambien.</p>";
        }

    }

    if (!regexCodigo.test(document.getElementById("new-card-code").value)) {
        error = true;
        mensajesError += "<p>El código es inválido.</p>"

    }

    if (!regexTitular.test(document.getElementById("new-card-holder").value)) {
        error = true;
        mensajesError += "<p>El nombre del titular es inválido.</p>"

    }

    if (error) {
        document.getElementById("mensaje1").innerHTML = mensajesError;
        return false;

    } else {
        mensajesError = " ";
        document.getElementById("mensaje1").innerHTML = mensajesError;
        return true;
    }


}


