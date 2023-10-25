import { cambiarCampcoins } from "../cambiarCampcoins.js";
import { listarSelect } from "../listarSelect.js";
import { enviar } from "../localstorage/enviar.js";
import { guardar } from "../localstorage/guardar.js";


let actualizar = document.querySelector("#actualizar")
let camper = document.querySelector(".camper")
let conceptos = document.querySelector(".concepto")


const campers="campers"
const concepto="concepto"

let arrayCampers=guardar(campers)
let arrayConcepto=guardar(concepto)

console.log(arrayCampers)
console.log(arrayConcepto)

listarSelect(arrayCampers,arrayConcepto)

actualizar.addEventListener("click",(e)=>{
    e.preventDefault()
    cambiarCampcoins(arrayCampers,arrayConcepto)
    enviar(arrayCampers,campers)
    alert("Campcoins Consignados")
})