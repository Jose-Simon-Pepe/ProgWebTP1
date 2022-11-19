// este es el objeto que gestiona el crud en localstorage

// setting up localstorage
const table = [];
let entities = ["productoCarrito","metodoPago","usuario","direccion", "producto"];

entities.forEach(entity => localStorage.setItem(entity,table));


//including crud files

import {nuevo} from './aniadir.mjs';
import {eliminar}  from './eliminar.mjs';
import {actualizar} from './actualizar.mjs';

export var DAO = {
  nuevo, eliminar, actualizar
}