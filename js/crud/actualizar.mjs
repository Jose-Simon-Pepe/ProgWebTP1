// este script actualiza alguno de los objetos que ya estan guardados en localstorage

// fix boilerplate
function getEntity(entity){
    if(localStorage.getItem(entity) == []){
        return [];
    }else{
        return JSON.parse(localStorage.getItem(entity));
    }
}

export function elemento(entity,newRecord){
    let storage = getEntity(entity);
    storage.forEach(element => {
        if (element.id == newRecord.id) {
            let index = storage.indexOf(element);
            storage.splice(index);
            storage.push(newRecord);
        }
    });
    localStorage.setItem(entity, JSON.stringify(storage));
}
