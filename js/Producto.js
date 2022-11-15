/* Objeto producto 

Este es el objeto que se persiste, el cual es recuperado de localstorage
Se serializa el contenido del objeto para poder volver a obtener su contenido

*/


class Prod {

    constructor(nombre, precio, image) {
        this.nombre = nombre;
        this.precio = precio;
        this.image = image;
    }

}


// harcodeo de productos 
// depende de Producto.js

let prod1 = new Prod("Notebook LENOVO Ideapad 3 14iml05 14\" Intel Core I3", "$260.3", "images/notebook.jpg");
let prod2 = new Prod("Heladera Con Freezer Samsung 321 L Rt32k5930sl Plata", "$160.2", "images/heladera.jpg");
let prod3 = new Prod("Sábana Queen 144 Hilos Estampada", "$200.3", "images/sabana.jpg");
let prod4 = new Prod("Cerveza tradicional", "$42", "images/cerveza-2.jpg");

let listaProductos = [prod1, prod2, prod3, prod4];
