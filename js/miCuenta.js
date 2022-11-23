

var unLogueado = getEntity("usuarioLogueado");

var botonCerrarSesion = document.getElementById("cerrarSesion");

botonCerrarSesion.addEventListener('click',cerrarSesion);

if(localStorage.length==0||localStorage.getItem("usuarioLogueado")=='' || localStorage.getItem("usuarioLogueado")==null ||localStorage.getItem("usuarioLogueado")==undefined || unLogueado == null ||localStorage.getItem("usuarioLogueado")=='[]'){
    document.getElementById("login-regis").style.display = "block";
    document.getElementById("idCuenta").style.display = "none";

}else{
    //console.log(unLogueado);
    document.getElementById("login-regis").style.display = "none";
    document.getElementById("idCuenta").style.display = "block";
    document.getElementById("nombre-apellido").innerHTML = unLogueado[0].nombre + " " + unLogueado[0].apellido;


}



function cerrarSesion(){
    var idLogueado = unLogueado[0].id;
    eliminar("usuarioLogueado",idLogueado);
    document.getElementById("login-regis").style.display = "block";
    document.getElementById("idCuenta").style.display = "none";
}