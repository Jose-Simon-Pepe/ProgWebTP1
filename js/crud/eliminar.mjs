// este script elimina un objeto ya guardado en localstorage

import * as encontrar from './encontrar.mjs';

export var eliminar = function eliminar(entity,recordId){
    let storage = encontrar.getEntity(entity);
    storage.forEach(element => {
        if (element.id == recordId) {
            let index = storage.indexOf(element);
            storage.splice(index);
        }
    });
    localStorage.setItem(entity, JSON.stringify(storage));
}
