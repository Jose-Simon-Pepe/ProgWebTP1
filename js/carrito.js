

// carrito logic

// recuperación de productos en mi carrito

function createProductItemInCarrito(producto) {
    const image = "../" + producto.image;
    const liArticuloEnCarrito = `

        <div class="titulo-compra-img">
            <img src="${image}" alt="${producto.nombre}">
            <p>${producto.nombre}</p>
        </div>

        <div class="titulo-compra1">
            <div class="subtitulo-compra">
                <p>Precio</p> 
                <p>Cantidad</p>
                <p>Subtotal</p>
            </div>
            <div class="valores-de-compra">
                <p>${producto.precio}</p>
                <input class="cuadro-cant" id="cantidad" type="number" name="cantidad" min="1" max="100" value="${producto.cantidadConsumo}">
                <p>${producto.precio}</p>
                <button class="icono-tacho" id="${producto.id}"><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>

`
    const liElement = document.createElement('li');
    liElement.classList.add("articulo-en-carrito");
    liElement.innerHTML = liArticuloEnCarrito;
    document.getElementsByClassName("listado-carrito")[0].appendChild(liElement);
}

let productStorage = localStorage.productoCarrito

function cargarItems() {
    Array.from(productStorage).forEach(function (producto) {

        for (var i = 0; i < localStorage.length; i++) {
          let toUp = localStorage.getItem(localStorage.key(i));
            createProductItemInCarrito(JSON.parse(toUp));
      }

    })
}


cargarItems();

// agregar al carrito



// eliminación de producto de carrito


let iconoTacho = document.getElementsByClassName("icono-tacho");

Array.from(iconoTacho).forEach(function (icono) {
    icono.addEventListener("click", () => {
        localStorage.removeItem(icono.id);
        console.log(icono.id);
    })
});


