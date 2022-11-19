// este script añade un elemento al localstorage según el objeto que sea


import * as encontrar from './encontrar.mjs';

export var nuevo = function nuevo(entity,record){
    let storage = encontrar.getEntity(entity);
    storage.push(record);
    localStorage.setItem(entity, JSON.stringify(storage));
}



