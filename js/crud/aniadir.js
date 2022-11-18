// este script añade un elemento al localstorage según el objeto que sea

function getEntity(entity){
    return JSON.parse(localStorage.getItem(entity));
}

function add(entity,record){
    getEntity(entity).list.push(record);
}


//including crud files

import * as aniadir from 'aniadir.js';
import * as eliminar from 'eliminar.js';
import * as actualizar from 'actualizar.js';
