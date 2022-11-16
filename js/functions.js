// traer objeto de localstorage

function modificarItem(item, modificacion){
    producto = JSON.parse(localStorage.getItem(producto.id));
    localStorage.setItem(producto.id,JSON.stringify(producto));
}