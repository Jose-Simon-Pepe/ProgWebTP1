
const btn = document.getElementById("btn");
let form = document.getElementById("form");
form.addEventListener("keyup", validar);

btn.addEventListener('click', ingresoDeUsuario);

function validar(event) {
  event.preventDefault();
  let desabilitar = false;
  if (document.getElementById("usuarioInput").value == "") {
    desabilitar = true;
  }
  if (document.getElementById("contraseña").value == "") {
    desabilitar = true;
  }
  if (desabilitar == true) {
    btn.disabled = true;
  } else {
    btn.disabled = false;
    if (btn.disabled == false) {
      const boton = document.getElementById("btn");
      boton.style.color = "white";
      boton.style.background = "rgb(138, 22, 22)";
    }
  }

  /*const almacenarUsuario = document.getElementById("usuarioInput").value;
  localStorage.setItem("usuario", JSON.stringify(almacenarUsuario));
  JSON.parse(localStorage.getItem("usuario"));

  const almacenarContraseña = document.getElementById("contraseña").value;
  localStorage.setItem("contraseña", JSON.stringify(almacenarContraseña));
  JSON.parse(localStorage.getItem("contraseña"));*/
}

function buscarUsuario(){
  let usuario = document.getElementById("usuarioInput").value;
  let contrasenia = document.getElementById("contraseña").value;
  
  var listaUsuarios = new Array();
  listaUsuarios = getEntity("usuario");

  if(listaUsuarios==null){
    console.log(listaUsuarios);
  }else{
    for(var i=0; i<listaUsuarios.length; i++){

      if(usuario == listaUsuarios[i].mail &&  contrasenia == listaUsuarios[i].pass){
        return listaUsuarios[i];
      }
    }
    return null;

  }
  

}
function ingresoDeUsuario(){ //funcion te necesito para Mi cuenta
  var usuarioLogueado = buscarUsuario();
  
  if(usuarioLogueado!= null){
    
    nuevo("usuarioLogueado",usuarioLogueado);
    location.href= "mi-cuenta.html";
    

  }else {
    var mensajesError = "Usuario y/o contraseña incorrecta";
    document.getElementById("mensaje-login").innerHTML = mensajesError;
    
  }
}


