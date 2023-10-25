import { agregarConcepto } from "../agregarConcepto.js"
import { guardar } from "../localstorage/guardar.js"
import { enviar } from "../localstorage/enviar.js"
import { Concepto } from "../POO/conceptoPOO.js"

let agregar=document.querySelector("#agregarConcepto")
let infoInputs=document.querySelector(".infoInputs")

const concepto= "concepto"

let arrayConcepto=guardar(concepto)


agregar.addEventListener("click",(e)=>{
    e.preventDefault()
    agregarConcepto(Concepto,arrayConcepto,enviar,concepto)
    alert("Agregado Correctamente")

})