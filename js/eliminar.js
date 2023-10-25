export function eliminar(elim,array,enviar,key){
    array.splice(elim,1)
    enviar(array,key)
}