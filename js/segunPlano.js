if ((localStorage.getItem('direccion')==0 ||localStorage.getItem('direccion')=='' || localStorage.getItem('direccion')!=null) 
&&(localStorage.getItem('metodoPago')==0 ||localStorage.getItem('metodoPago')=='' || localStorage.getItem('metodoPago')!=null)
&&(localStorage.getItem('producto')==0 ||localStorage.getItem('producto')=='' || localStorage.getItem('producto')!=null)
&&(localStorage.getItem('productoCarrito')==0 ||localStorage.getItem('productoCarrito')=='' || localStorage.getItem('productoCarrito')!=null)
&&(localStorage.getItem('usuario')==0 ||localStorage.getItem('usuario')=='' || localStorage.getItem('usuario')!=null)
&&(localStorage.getItem('usuarioLogueado')==0 ||localStorage.getItem('usuarioLogueado')=='' || localStorage.getItem('usuarioLogueado')!=null)){

}else{
    const table = [];
    let entities = ["productoCarrito", "metodoPago", "usuario", "direccion", "producto", "usuarioLogueado"];

    entities.forEach(entity => localStorage.setItem(entity, table));


    //including crud files
    var actualizar =  function actualizar(entity,newRecord){
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
    var nuevo = function nuevo(entity,record){
        let storage = encontrar.getEntity(entity);
        storage.push(record);
        localStorage.setItem(entity, JSON.stringify(storage));
    }
    
    var eliminar = function eliminar(entity,recordId){
        let storage = encontrar.getEntity(entity);
        storage.forEach(element => {
            if (element.id == recordId) {
                let index = storage.indexOf(element);
                storage.splice(index);
            }
        });
        localStorage.setItem(entity, JSON.stringify(storage));
    }
    function getEntity(entity){
        if(localStorage.getItem(entity) == []){
            return [];
        }else{
            return JSON.parse(localStorage.getItem(entity));
        }
    }

    var DAO = {
        nuevo, eliminar, actualizar
    }

    
    /*var borroEstaCosa = document.getElementById("borraEstaCosa");
    borroEstaCosa.parentNode.removeChild(borroEstaCosa);*/

}
