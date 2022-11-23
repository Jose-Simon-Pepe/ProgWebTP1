

/**ID
 * "new-email"
 * "new-name"
 * "new-secondaryname"
 * "new-pass"
 */
document.querySelector("#btn-guardar-usuario").addEventListener('click',guardarUsuario);
function getNewId(){
    let newId =0;
    if(getEntity("usuario")==""||getEntity("usuario") == undefined ||getEntity("usuario") == null){
        return newId;

    }else{
        let usuariosStorage = getEntity("usuario");
        newId = (usuariosStorage.length-1)+1;
        return newId;
        
    }
}
function guardarUsuario() {
    if (validarCrearUsuario() == true) {
        var gEmail = document.querySelector('#new-email').value,
            gNombre = document.querySelector('#new-name').value,
            gApellido = document.querySelector('#new-secondaryname').value,
            gPass = document.querySelector('#new-pass').value;
            

        var gId = getNewId();

        
        agregarUsuario(gEmail,gNombre,gApellido,gPass,gId);
        formulario.reset();

    }

}

class User{
    constructor(mail, nombre,apellido, pass, id){
        this.mail = mail;
        this.nombre = nombre;
        this.apellido = apellido;
        this.pass = pass;
        this.id = id;
    }
}
function agregarUsuario(pEmail, pNombre,pApellido, pPass, pId){
    let nuevoUsuario = new User(pEmail,pNombre,pApellido,pPass,pId);
    
    nuevo("usuario",nuevoUsuario);
    
}



