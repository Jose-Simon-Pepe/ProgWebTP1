// recuperación de productos en mi carrito

function createProductItemInCarrito(producto){
    //create li element
    let li = document.createElement("li");
    li.className= "articulo-en-carrito";
    //create li divs as childs
    let liDiv1 = document.createElement("div");
    liDiv1.className= "titulo-compra-img";
    let liDiv2 = document.createElement("div");
    liDiv2.className = "titulo-compra1";
    //create div 1 img and p as childs
    let div1Img = document.createElement("img");
    div1Img.src="../"+producto.image;
    let div1p = document.createElement("p");
    div1p.innerText=producto.nombre;
    // create div 2 divs as childs
    let div2Div1 = document.createElement("div");
    div2Div1.className="subtitulo-compra";
    let div2Div2 = document.createElement("div");
    div2Div2.className="valores-de-compra";
    //create div 2 div 1 p
    let div2Div1p1 = document.createElement("p");
    div2Div1p1.innerText="Precio";
    let div2Div1p2 = document.createElement("p");
    div2Div1p2.innerText="Cantidad";
    let div2Div1p3 = document.createElement("p");
    div2Div1p3.innerText="Subtotal";
    //create div 2 div 2 p input p button
    let div2div2p = document.createElement("p");
    div2div2p.innerText=producto.precio;
    let div2div2input = document.createElement("input");
    div2div2input.class="cuadro-cant";
    div2div2input.id="cantidad";
    div2div2input.type="number";
    div2div2input.name="cantidad";
    div2div2input.min=1; div2div2input.max=100; div2div2input.value=1;
    let div2div2p2 = document.createElement("p");
    div2div2p2.innerText=producto.precio;
    let div2div2button = document.createElement("button");
    div2div2button.className="icono-tacho";
    //create i into div2div2button
    let div2div2buttonI = document.createElement("i");
    div2div2buttonI.className="fa-solid fa-trash";
    //take a break
    //setting as childs
    document.getElementsByClassName("listado-carrito")[0].appendChild(li);
    li.appendChild(liDiv1);  li.appendChild(liDiv2);
    liDiv1.appendChild(div1Img);     liDiv1.appendChild(div1p);
    liDiv2.appendChild(div2Div1);    liDiv2.appendChild(div2Div2);  
    div2Div1.appendChild(div2Div1p1);
    div2Div1.appendChild(div2Div1p2);
    div2Div1.appendChild(div2Div1p3);
    div2Div2.appendChild(div2div2p);
    div2Div2.appendChild(div2div2input);
    div2Div2.appendChild(div2div2p2);
    div2Div2.appendChild(div2div2button);
    div2div2button.appendChild(div2div2buttonI);
}
for (let index = 0; index < localStorage.length; index++) {
    createProductItemInCarrito(JSON.parse(localStorage.getItem(index)));
}

