import { nuevo } from "./crud/aniadir.mjs";
import { getEntity } from "./crud/encontrar.mjs";

document.querySelector('#btn-guardar-direccion').addEventListener('click', guardarDomicilio);
drawDomicilioTable();

var usuarioLogueado = getEntity("usuarioLogueado");

function getNewIdDomicilio(){
    let newIdDomicilio =0;
    if(getEntity("direccion")==""||getEntity("direccion") == undefined ||getEntity("direccion") == null){
        return newIdDomicilio;

    }else{
        let direccionesStorage = getEntity("direccion");
        newIdDomicilio = (direccionesStorage.length-1)+1;
        return newIdDomicilio;
        
    }
}

function guardarDomicilio() {
    var usuarioLogueado = getEntity("usuarioLogueado");
    if (validarNuevoDomicilio() == true) {

        var gIdUsuario = usuarioLogueado[0].id;
        var gId = getNewIdDomicilio();
        var gAlias = document.querySelector('#alias').value,
            numProvincia = document.querySelector('#provincia').value,
            numLocalidad = document.querySelector('#localidad').value,
            gDireccion = document.querySelector('#direccion').value,
            gTelefono = document.querySelector('#telefono').value,
            gPiso = document.querySelector('#piso').value,
            gDto = document.querySelector('#dto').value;

        var gProvincia = "", gLocalidad = "";

        if (numProvincia == '1'){
            gProvincia = "Buenos Aires";
        }else{
            gProvincia = "Capital Federal";
        }


        switch (numLocalidad) {
            case '1':
                gLocalidad = "La Matanza";
                break;

            case '2':
                gLocalidad = "Morón";
                break;

            case '3':
                gLocalidad = "Ramos Mejia";
                break;

            case '4':
                gLocalidad = "Olivos";
                break;

            case '5':
                gLocalidad = "Almagro";
                break;

            case '6':
                gLocalidad = "Balvanera";
                break;

            case '7':
                gLocalidad = "Belgrano";
                break;

            default:
                gLocalidad = " ";
                break;
        }
        let direccionAgregada= agregarDomicilio(gAlias, gProvincia, gLocalidad, gDireccion, gTelefono, gPiso, gDto, gId, gIdUsuario);
        crearUnaTabla(gAlias,gDireccion,gProvincia, gLocalidad, direccionAgregada);

        formularioDomicilio.reset();

    }

}

class Domicilio{
    constructor(alias, provincia, localidad, direccion, telefono, piso, dto, id, idUsuario){
        this.alias = alias;
        this.provincia= provincia;
        this.localidad= localidad;
        this.direccion = direccion;
        this.telefono = telefono;
        this.piso = piso;
        this.dto= dto;
        this.id = id;
        this.idUsuario  = idUsuario;
    }
    
}
function agregarDomicilio(pAlias, pProvincia, pLocalidad, pDireccion, pTelefono, pPiso, pDto, pId, pIdUser){
    let nuevoDomicilio = new Domicilio(pAlias, pProvincia, pLocalidad, pDireccion, pTelefono, pPiso, pDto, pId, pIdUser);
    nuevo("direccion",nuevoDomicilio);
    return nuevoDomicilio;
    
}

function drawDomicilioTable(){
    var listDomicilio = getEntity("direccion");
    var usuarioLogueado = getEntity("usuarioLogueado");

    if(localStorage.length==0 || localStorage.getItem("direccion")==null ||localStorage.getItem("direccion")==undefined || usuarioLogueado == null || localStorage.getItem("usuarioLogueado")=='[]'){

        //console.log(usuarioLogueado)

    }else{
        for(var i=0; i<listDomicilio.length; i++){
            if(usuarioLogueado[0].id == listDomicilio[i].idUsuario){
                crearUnaTabla(listDomicilio[i].alias, listDomicilio[i].direccion, listDomicilio[i].provincia, listDomicilio[i].localidad,listDomicilio[i]);
            }
    
        }

    }
    
}
function crearUnaTabla(pAlias, pDireccion,pProvincia,pLocalidad, pNuevaDireccion){
    var divFila = document.createElement("div");
    divFila.className = "fila";
    divFila.setAttribute("filaDireccion-id", pNuevaDireccion.id);

    var p1=document.createElement("p");
        p1.className ="item-direc alias";
        //p1.className ="alias";
        p1.innerHTML = pAlias;

        divFila.appendChild(p1);

        var div2 = document.createElement("div");
        div2.className="item-direc";

        var div2p = document.createElement("p");
        div2p.innerHTML = pDireccion;
        div2.appendChild(div2p);

        var div2p1 = document.createElement("p");
        div2p1.innerHTML = pProvincia + ", "+pLocalidad;
        div2.appendChild(div2p1);

        divFila.appendChild(div2);


        var div3 = document.createElement("div");
        div3.className ="tachito";
        

        var div3Button = document.createElement("button");
        div3Button.className = "icono-tacho";//nombre de mi boton-eliminar
        div3.appendChild(div3Button);
        
        var div3ButtonI = document.createElement("i");
        div3ButtonI.className = "fa-solid fa-trash";
        div3Button.appendChild(div3ButtonI);

        
        divFila.appendChild(div3);

        document.getElementById("grilla").appendChild(divFila);

        div3Button.addEventListener("click",(event)=>{
            let filaAEliminar = event.target.parentNode.parentNode.parentNode;
            let idFila = filaAEliminar.getAttribute('filaDireccion-id');
            
            event.target.parentNode.parentNode.parentNode.remove();
            borrarDireccion(pNuevaDireccion, idFila);

            
        })

}
function borrarDireccion(direccion, idFila){
    var direccionList = getEntity("direccion");
    //var idTarjeta = tarjeta.id;
    console.log(direccion);
    if(direccion== null){

    }else{
        let indiceDireccionEnVector =direccionList.findIndex(element => element.id == idFila);
        direccionList.splice(indiceDireccionEnVector,1);
        let direccionesJSON =JSON.stringify(direccionList);
        localStorage.setItem('direccion',direccionesJSON)
        
    }    
}
