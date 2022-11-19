// este script actualiza alguno de los objetos que ya estan guardados en localstorage

import * as encontrar from './encontrar.mjs';


export var actualizar =  function actualizar(entity,newRecord){
    let storage = encontrar.getEntity(entity);
    storage.forEach(element => {
        if (element.id == newRecord.id) {
            let index = storage.indexOf(element);
            storage.splice(index);
            storage.push(newRecord);
        }
    });
    localStorage.setItem(entity, JSON.stringify(storage));
}
