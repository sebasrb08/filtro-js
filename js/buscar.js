import { resetear } from "./borrarCampers.js"
import { listarCamper } from "./listarCamper.js"

export function buscar(value,array){
    let filtrado=array.filter((indi) => indi.nombre.indexOf(value.value) != -1 || indi.cdn.indexOf(value.value) != -1 )
    resetear()
    listarCamper(filtrado)
}