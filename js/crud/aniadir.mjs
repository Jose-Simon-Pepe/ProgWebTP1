// este script añade un elemento al localstorage según el objeto que sea

function getEntity(entity){
    if(localStorage.getItem(entity) == []){
        return [];
    }else{
        return JSON.parse(localStorage.getItem(entity));
    }
}

export function add(entity,record){
    let storage = getEntity(entity);
    storage.push(record);
    localStorage.setItem(entity, JSON.stringify(storage));
}



