// recuperación de productos en mi carrito

function createProductItemInCarrito(producto){
    const image= "../"+producto.image;
    const liArticuloEnCarrito = `
    <li class="articulo-en-carrito">
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
                <input class="cuadro-cant" id="cantidad" type="number" name="cantidad" min="1" max="100" value="1">
                <p>${producto.precio}</p>
                <button class="icono-tacho" ><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>
    </li>
`
const liElement = document.createElement('li');
liElement.innerHTML = liArticuloEnCarrito;
document.getElementsByClassName("listado-carrito")[0].appendChild(liElement);
}


for (let index = 0; index < localStorage.length; index++) {
    createProductItemInCarrito(JSON.parse(localStorage.getItem(index)));
}

