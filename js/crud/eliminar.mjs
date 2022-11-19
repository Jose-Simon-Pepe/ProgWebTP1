// este script elimina un objeto ya guardado en localstorage

// fix boilerplate
function getEntity(entity){
    if(localStorage.getItem(entity) == []){
        return [];
    }else{
        return JSON.parse(localStorage.getItem(entity));
    }
}

export function elemento(entity,recordId){
    let storage = getEntity(entity);
    storage.forEach(element => {
        if (element.id == recordId) {
            let index = storage.indexOf(element);
            storage.splice(index);
        }
    });
    localStorage.setItem(entity, JSON.stringify(storage));
}
