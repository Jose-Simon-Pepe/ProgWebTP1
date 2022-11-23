function buscar() {
  let input = document.getElementById('buscador').value
    input=input.toLowerCase();
    let x = document.querySelectorAll('.categoria');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="";                 
        }
    }
}