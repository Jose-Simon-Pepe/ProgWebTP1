import {DAO} from './crud/DAO.mjs';

// DAO.nuevo("productoCarrito",{id:1,nombre:"hola"});

class Prod {

    constructor(nombre, precio, image, id, cantidadConsumo) {
        this.nombre = nombre;
        this.precio = precio;
        this.image = image;
        this.id = id;
        this.cantidadConsumo = cantidadConsumo;
    }

}

let  muestra = new Prod("cerveza","600","path",3,1);

DAO.nuevo("productoCarrito",muestra);

DAO.actualizar("productoCarrito",muestra);

DAO.eliminar("productoCarrito",3);