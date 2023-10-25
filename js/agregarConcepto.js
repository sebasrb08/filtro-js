export function agregarConcepto(Cliente,array,enviarDatos,key){
    let info =document.querySelectorAll(".infoInputs")
    let clientes= new Cliente(1,info[0].value,info[1].value)
    array.push(clientes)
    enviarDatos(array,key)

}
