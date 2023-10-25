export function listarSelect(arrayCampers,arrayConcepto){
    let campers=document.querySelector(".camper")
    let concepto=document.querySelector(".concepto")

    arrayCampers.forEach(element => {
        campers.innerHTML+=`
        <option>${element.cdn}-${element.nombre}</option>
        `
    });

    arrayConcepto.forEach(element => {
        concepto.innerHTML+=`
        <option>${element.descripcion}</option>
        `
    });


}