// este es el objeto que gestiona el crud en localstorage

// setting up localstorage
const table = [];
let entities = ["productoCarrito","metodoPago","usuario","direcciones"];

entities.forEach(entity => localStorage.setItem(entity,table));


//including crud files

import * as aniadir from './aniadir.mjs';
//import * as eliminar from 'eliminar.mjs';
//import * as actualizar from 'actualizar.mjs';

aniadir.add("productoCarrito",{
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    id: 1
  });

