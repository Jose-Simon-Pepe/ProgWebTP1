

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
    currentButton.addEventListener("click", (e) => {
        e.preventDefault(true);
        subirProductoACarrito(getEntityById("producto",currentButton.id));
    })
}

// persistencia en localstorage de los productos

function subirProductoACarrito(producto) {


    if (getEntity("productoCarrito",producto) == null) {
        nuevo("productoCarrito",producto)
    }else{
        aniadirConsumo(producto,1)
    }
}

function aniadirConsumo(producto, valor) {
    let recuperado = getEntity("productoCarrito",producto);
    recuperado.cantidadConsumo =+ valor;
    actualizar("productoCarrito",recuperado)
}