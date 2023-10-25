
import { resetear } from "./borrarCampers.js"
import { listarCamper } from "./listarCamper.js"
import { enviar } from "./localstorage/enviar.js"
export function modificar(index,array,edit,key){
    let padre=edit.parentNode.parentNode
    let hijos=padre.children
    let info =document.querySelectorAll(".infoInputs2")
    let enviados=document.querySelector(".enviados")
    for (let i = 0; i < info.length; i++) {
        info[i].value=hijos[i].textContent ;
    }

    enviados.addEventListener("click",()=>{
        array[index].cdn=info[0].value
        array[index].nombre=info[1].value
        array[index].telefono=info[2].value
        array[index].correo=info[3].value
        array[index].grupo=info[4].value

        console.log(array)
        enviar(array,key)
        resetear()
        listarCamper(array)
    })



}