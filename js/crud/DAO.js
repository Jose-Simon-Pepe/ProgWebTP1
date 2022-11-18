// este es el objeto que gestiona el crud en localstorage

// setting up localstorage
let table = [];
let entities = ["productoCarrito","metodoPago","usuario","direcciones"];

entities.forEach(entity => localStorage.setItem(entity,table));

