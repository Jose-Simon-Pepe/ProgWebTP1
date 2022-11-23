// este es el objeto que gestiona el crud en localstorage

// setting up localstorage
const table = [];
let entities = ["productoCarrito", "metodoPago", "usuario", "direccion", "producto", "usuarioLogueado"];

entities.forEach(entity => {
  if (localStorage.$entity == null) {
    localStorage.setItem(entity, table)
  }
});

var nuevo = function nuevo(entity, record) {
  let storage = null;
  if (localStorage.getItem(entity) == []) {
    storage = [];
  } else {
    storage = JSON.parse(localStorage.getItem(entity));
  }
  storage.push(record);
  localStorage.setItem(entity, JSON.stringify(storage));
}

var actualizar = function actualizar(entity, newrecord) {
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

function getEntity(entity, toGet) {
  if (JSON.parse(localStorage.getItem(entity).includes(toGet))) {
    return JSON.parse(localStorage.getItem(entity).includes(toGet));
  }
  else {
    return [];
  }
}


function getEntityById(entity, idToGet) {
  let storage = JSON.parse(localStorage.getItem(entity));
  let searched = null;
  for (const element in storage) {
    if (element.id == idToGet) {
      searched = element;
      break;
    }
  }

  return searched;
}


var eliminar = function eliminar(entity, recordId) {
  let storage = encontrar.getEntity(entity);
  storage.forEach(element => {
    if (element.id == recordId) {
      let index = storage.indexOf(element);
      storage.splice(index);
    }
  });
  localStorage.setItem(entity, JSON.stringify(storage));
}
