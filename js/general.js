/* Objeto producto 

Este es el objeto que se persiste, el cual es recuperado de localstorage
Se serializa el contenido del objeto para poder volver a obtener su contenido

*/

class Prod {

    constructor(nombre, precio, image){
        this.nombre = nombre;
        this.precio = precio; 
        this.image = image;
    }

}

// harcodeo de productos 

let prod1 = new Prod("Notebook LENOVO Ideapad 3 14iml05 14\" Intel Core I3","$260.3","images/notebook.jpg");
let prod2  = new Prod("Heladera Con Freezer Samsung 321 L Rt32k5930sl Plata","$160.2", "images/heladera.jpg");
let prod3 = new Prod("Sábana Queen 144 Hilos Estampada","$200.3", "images/sabana.jpg");

let listaProductos = [prod1, prod2, prod3];

// creacion de elemento li en .productos-mas-vendido a partir de los Prod
let productosMasVendido = document.getElementsByClassName("productos-mas-vendido")[0] ;

function createLiFromProduct(prod, iterador){
    //create li element
    let prodLi = document.createElement("li");
    //create li subelements
    let prodImg = document.createElement("img");
    prodImg.src= prod.image;
    let prodPie = document.createElement("div");
    prodPie.className= "pie-producto";
    // create prod pie div
    let prodPieDiv = document.createElement("div");
    // create prod pie div subelements
    let prodPieDivP = document.createElement("p");
    prodPieDivP.className="titulo-producto";
    prodPieDivP.innerText= prod.nombre;
    let prodPieDivH3 = document.createElement("h3");
    prodPieDivH3.className="precio-producto";
    prodPieDivH3.innerText=prod.precio;
    // create prod pie a
    let prodPieA = document.createElement("a");
    // create prod pie a button
    let prodPieAButton = document.createElement("button");
    prodPieAButton.className= "carrito agregarCarrito";
    prodPieAButton.id= iterador;
    // create i into that button
    let prodPieAButtonLi = document.createElement("i");
    prodPieAButtonLi.className= "fa-solid fa-cart-plus";
    // adding as childs..
    productosMasVendido.appendChild(prodLi);
    prodLi.appendChild(prodImg);
    prodLi.appendChild(prodPie);
    prodPie.appendChild(prodPieDiv);
    prodPieDiv.appendChild(prodPieDivP);
    prodPieDiv.appendChild(prodPieDivH3);
    prodPie.appendChild(prodPieA);
    prodPieA.appendChild(prodPieAButton);
}

// creating product list
let iterador=0;
listaProductos.forEach(element => {
    createLiFromProduct(element,iterador);
    iterador++;
});

/* carrito 

1.Se deben mostrar todos los productos que se fueron agregando al carrito, 
leyéndolos desde el localstorage.
2. Se deben poder eliminar filas apretando el icono del carrito de compras.(?)
3. Se deben poder eliminar productos del carrito con el boton de basura

*/

let agregarCarritoButtons = document.getElementsByClassName("agregarCarrito");

for (let index = 0; index < agregarCarritoButtons.length; index++) {
    let currentButton = agregarCarritoButtons[index];
    currentButton.addEventListener("click",()=>{
      console.log(listaProductos[currentButton.id]);
      subirProductoACarrito(listaProductos[currentButton.id]);
    })
}
let ordenLlegada=0;
function subirProductoACarrito(producto){
    localStorage.setItem(ordenLlegada,JSON.stringify(producto));
    ordenLlegada++;
}



// persistencia en localstorage de los productos