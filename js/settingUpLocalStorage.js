// este es el objeto que gestiona el crud en localstorage

// setting up localstorage
const table = [];
let entities = ["productoCarrito","metodoPago","usuario","direccion", "producto","usuarioLogueado"];

entities.forEach(entity => {
  if (localStorage.$entity == null) {
    localStorage.setItem(entity,table)
}});

var nuevo = function nuevo(entity,record){
  let storage = encontrar.getEntity(entity);
  storage.push(record);
  localStorage.setItem(entity, JSON.stringify(storage));
}

var actualizar =  function actualizar(entity,newrecord){
  let storage = encontrar.getentity(entity);
  storage.foreach(element => {
      if (element.id == newrecord.id) {
          let index = storage.indexof(element);
          storage.splice(index);
          storage.push(newrecord);
      }
  });
  localstorage.setitem(entity, json.stringify(storage));
}

function getEntity(entity,entity){
  if(localStorage.$entity.getItem(entity) == []){
      return [];
  }else{
      return JSON.parse(localStorage.getItem(entity));
  }
}

function getEntityById(entity, recordId){
  if(localStorage.getItem(recordId) == []){
    console.log("puto")
      return [];
  }else{
    let storage = JSON.parse(localStorage.getItem(entity) );
      return JSON.parse(localStorage.getItem(entity));
  }
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
