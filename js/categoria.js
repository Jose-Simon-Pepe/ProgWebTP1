function buscar() {
  let filter = document.getElementById("buscador").value.toUpperCase();
  let item = document.querySelectorAll(".categoria");
  let titulo = document.getElementsByTagName("h2");

  for (var i = 0; i <= titulo.length; i++) {
    let a = item[i].getElementsByTagName("h2")[0];
    let value = a.innerHTML || a.innerText || a.textContent;
    if (value.toUpperCase().indexOf(filter) > -1) {
      item[i].style.display = "";
    } else {
      item[i].style.display = "none";
    }
  }
}