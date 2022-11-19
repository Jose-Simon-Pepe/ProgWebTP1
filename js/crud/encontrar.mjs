// este script busca un objeto dentro de los arrays en localstorage

export function getEntity(entity){
    if(localStorage.getItem(entity) == []){
        return [];
    }else{
        return JSON.parse(localStorage.getItem(entity));
    }
}
