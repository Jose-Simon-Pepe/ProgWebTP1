

// creacion de elemento li en .productos-mas-vendido a partir de los Prod
let productosMasVendido = document.getElementsByClassName("productos-mas-vendido")[0];

function createLiFromProduct(prod, iterador) {
   
    const liProducto = `
   
        <img src="${prod.image}" alt="${prod.nombre}">
        <div class="pie-producto">
            <div>
                <p class="titulo-producto">${prod.nombre}</p>
                <h3 class="precio-producto">${prod.precio}</h3>
            </div>
            <a href="pages/mi-carrito.html">
                <button class="carrito agregarCarrito" id="${iterador}"><i class="fa-solid fa-cart-plus"></i></button>
            </a>

        </div>

 
    `

    const liElement = document.createElement('li');
    liElement.innerHTML = liProducto;
    productosMasVendido.appendChild(liElement);

}

// creating product list
let iterador = 0;
listaProductos.forEach(element => {
    createLiFromProduct(element, iterador);
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
    currentButton.addEventListener("click", () => {
        console.log(listaProductos[currentButton.id]);
        subirProductoACarrito(listaProductos[currentButton.id]);
    })
}

// persistencia en localstorage de los productos

function subirProductoACarrito(producto) {
    // se busca si existe item con mismo id
    if (localStorage.getItem(producto.id) != null) {
        aniadirConsumo(producto, 1);
    }
    else {
        // caso negativo, se agrega el item
        producto.cantidadConsumo++;
        localStorage.setItem(producto.id, JSON.stringify(producto));
    }
    // caso afirmativo, se agrega una cantidad
}

function aniadirConsumo(producto, valor){
    producto = JSON.parse(localStorage.getItem(producto.id));
    producto.cantidadConsumo =+ valor;
    localStorage.removeItem(producto.id);
    localStorage.setItem(producto.id,JSON.stringify(producto));
}