const btn = document.getElementById("btn");
let form = document.getElementById("form");
  form.addEventListener("keyup", validar);

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

  const almacenarUsuario = document.getElementById("usuarioInput").value;
  localStorage.setItem("usuario", JSON.stringify(almacenarUsuario));
  JSON.parse(localStorage.getItem("usuario"));

  const almacenarContraseña = document.getElementById("contraseña").value;
  localStorage.setItem("contraseña", JSON.stringify(almacenarContraseña));
  JSON.parse(localStorage.getItem("contraseña"));
}