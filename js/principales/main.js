import { guardar } from "../localstorage/guardar.js"
import { agregarCamper } from "../agregarCamper.js"
import { Campers } from "../POO/campersPOO.js"
import { enviar } from "../localstorage/enviar.js"
import { resetear } from "../borrarCampers.js"
import { listarCamper } from "../listarCamper.js"
import { vaciar } from "../vaciarInputs.js"
import { eliminar } from "../eliminar.js"
import { modificar } from "../modificar.js"
import { buscar } from "../buscar.js"

const campers="campers"
let infoInputs=document.querySelectorAll(".infoInputs")
let infoInputs2=document.querySelectorAll(".infoInputs2")


let enviarbtn = document.querySelector(".enviarCampers")
let search = document.querySelector("#search")
let ArrayCampers=guardar(campers)

listarCamper(ArrayCampers)
let trash=document.querySelectorAll(".trash")
let editar=document.querySelectorAll(".edit")




enviarbtn.addEventListener("click",()=>{
    agregarCamper(Campers,ArrayCampers,enviar,campers)
    resetear()
    listarCamper(ArrayCampers)
    vaciar(infoInputs)

    let trash=document.querySelectorAll(".trash")
    let editar=document.querySelectorAll(".edit")
    let search = document.querySelector("#search")

    for (let index = 0; index < trash.length; index++) {
        trash[index].addEventListener("click",()=>{
            eliminar(index,ArrayCampers,enviar,campers)
            location.reload()
        })
            
    }
    
    
    
    for (let index = 0; index < trash.length; index++) {
        editar[index].addEventListener("click",()=>{
            modificar(index,ArrayCampers,editar[index],campers)
        })
            
    }
    
    
    
    search.addEventListener("keyup",()=>{
        buscar(search,ArrayCampers)
    })

    
})

for (let index = 0; index < trash.length; index++) {
    trash[index].addEventListener("click",()=>{
        eliminar(index,ArrayCampers,enviar,campers)
        location.reload()
    })
        
}



for (let index = 0; index < trash.length; index++) {
    editar[index].addEventListener("click",()=>{
        modificar(index,ArrayCampers,editar[index],campers)

    })
}



search.addEventListener("keyup",()=>{
    buscar(search,ArrayCampers)
})