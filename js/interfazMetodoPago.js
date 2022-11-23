import { nuevo } from "./crud/aniadir.mjs";
import { getEntity } from "./crud/encontrar.mjs";

document.querySelector('#btn-guardar-tarjeta').addEventListener('click', guardarTarjeta);
drawCardTable();

var usuarioLogueado = getEntity("usuarioLogueado");

function getNewIdTarjeta(){
    let newIdTarjeta =0;
    if(getEntity("metodoPago")== "" || getEntity("metodoPago") == undefined || getEntity("metodoPago")== null){
        return newIdTarjeta;
    }else{
        let tarjetasStorage = getEntity("metodoPago");
        newIdTarjeta= (tarjetasStorage.length-1)+1;
        return newIdTarjeta;
    }
}

function guardarTarjeta() {
    var usuarioLogueado = getEntity("usuarioLogueado");
    if (validarMetodoDePago() == true) {

        var gIdUsuario = usuarioLogueado[0].id,
        gId = getNewIdTarjeta();
        var gAlias = document.querySelector('#new-card-alias').value,
            gNumero = document.querySelector('#new-card-number').value,
            gCodigo = document.querySelector('#new-card-code').value,
            gVencimiento = document.querySelector('#new-card-expiration').value,
            gTitular = document.querySelector('#new-card-holder').value
        var gImagen = "";


        switch (gAlias) {
            case '1':
                gImagen = "../images/bancos/banco-galicia.png";
                break;
            case '2':
                gImagen = "../images/bancos/banco-hsbc.png";
                break;
            case '3':
                gImagen = "../images/bancos/banco-macro.png";
                break;
            case '4':
                gImagen = "../images/bancos/banco-nacion.png";
                break;

            default:
                gImagen = " ";
                break;

        }

        let tarjetaAgregada = agregarTarjeta(gImagen, gAlias, gNumero, gCodigo, gVencimiento, gTitular, gId, gIdUsuario);
        crearUnaTabla(gImagen, gNumero, gVencimiento, tarjetaAgregada);
        
        formularioTarjeta.reset();
    }

}
class Tarjeta{
    constructor(imagen, alias, numero, codigo, vencimiento, titular, id, idUsuario){
        this.imagen =  imagen;
        this.alias= alias;
        this.numero = numero;
        this.codigo = codigo;
        this.vencimiento = vencimiento;
        this.titular = titular;
        this.id = id;
        this.idUsuario = idUsuario;

    }
    
}

function agregarTarjeta(pImagen, pAlias, pNumero, pCodigo, pVencimiento, pTitular, pId, pIdUsuario){
    let nuevaTarjeta = new Tarjeta(pImagen, pAlias, pNumero, pCodigo, pVencimiento, pTitular, pId, pIdUsuario);
    nuevo("metodoPago",nuevaTarjeta);
    return nuevaTarjeta;
}


function drawCardTable() {

    var list = getEntity("metodoPago");
    var usuarioLogueado = getEntity("usuarioLogueado");

    if(localStorage.length==0 || localStorage.getItem("metodoPago")==null ||localStorage.getItem("metodoPago")==undefined || usuarioLogueado == null || localStorage.getItem("usuarioLogueado")=='[]'){
        
    }else{
        for (var i = 0; i < list.length; i++) {
            if(usuarioLogueado[0].id == list[i].idUsuario){
                crearUnaTabla(list[i].imagen, list[i].numero, list[i].vencimiento,list[i]);
            }
        }

    }
    
   
}
function crearUnaTabla(pImagen, pNumero, pVencimiento, pNuevaTarjeta){
    var divFila = document.createElement("div");
        divFila.className = "grilla-fila";
        divFila.setAttribute("fila-id",pNuevaTarjeta.id);

        var div1 = document.createElement("div");
        div1.className = "item-direc";

        var div2 = document.createElement("div");
        div2.className = "item-direc"

        /*var div3 = document.createElement("div");
        div3.className = "tachito";*/
        //------------------------------------------
        var div1p = document.createElement("p");
        div1p.className = "fondo-banco";

        var div1PImg = document.createElement("img");
        div1PImg.className = "banco";
        div1PImg.src = pImagen;

        

        var div2Span = document.createElement("span");
        div2Span.className = "bold-grilla";
        div2Span.innerHTML = "Numero: " + pNumero;

        var div2p = document.createElement("p");
        div2p.innerHTML = "Vencimiento: " + pVencimiento;

        

        var div3Button = document.createElement("button");
        div3Button.className = "icono-tacho";
       

        var div3ButtonI = document.createElement("i");
        div3ButtonI.className = "fa-solid fa-trash";
    

        divFila.appendChild(div1);
        divFila.appendChild(div2);
        divFila.appendChild(div3Button);

        div1.appendChild(div1p);
        div1p.appendChild(div1PImg);

        div2.appendChild(div2Span);
        div2.appendChild(div2p);

        //div3.appendChild(div3Button);
        div3Button.appendChild(div3ButtonI);
    
        document.getElementsByClassName("grilla-fila")[0].appendChild(divFila); 
        
        div3Button.addEventListener("click",(event)=>{
            let filaAEliminar = event.target.parentNode.parentNode;
            let idFila = filaAEliminar.getAttribute('fila-id');
            event.target.parentNode.parentNode.remove();
            borrarTarjeta(pNuevaTarjeta, idFila);
        });    
}

function borrarTarjeta(tarjeta, idFila){
    var tarjetaList = getEntity("metodoPago");
    //var idTarjeta = tarjeta.id;
    console.log(tarjeta);
    console.log(idFila)
    if(tarjeta== null){

    }else{
        let indiceTarjetaEnVector =tarjetaList.findIndex(element => element.id == idFila);
        console.log("indice "+ indiceTarjetaEnVector)
       indiceTarjetaEnVector;
    
        tarjetaList.splice(indiceTarjetaEnVector,1);
        let tarjetasJSON =JSON.stringify(tarjetaList);
        localStorage.setItem('metodoPago',tarjetasJSON)
        
    }    
}

