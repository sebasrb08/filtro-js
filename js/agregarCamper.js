import { diferente } from "./diferente.js"
export function agregarCamper(Cliente,array,enviarDatos,key){
    let flat = diferente(array)
    console.log(flat)
    if (flat){   
        let info =document.querySelectorAll(".infoInputs")
        let clientes= new Cliente(info[0].value,info[1].value,info[2].value,info[3].value,info[4].value,0)
        array.push(clientes)
        enviarDatos(array,key)
    }else{
        alert("Ya esta usada")
    }
}
