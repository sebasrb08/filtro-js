export function cambiarCampcoins(arrayCampers,arrayConcepto){
    let camper = document.querySelector(".camper").value
    let concepto = document.querySelector(".concepto")
    let valor
    arrayConcepto.forEach(element => {
        if(element.descripcion == concepto.value ){
            valor= parseInt(element.valor)
        }
    });
    let camp =camper.split("-")
    console.log(camp)
    arrayCampers.forEach(element => {

        if(element.cdn == camp[0]){
            element.campcoins+=valor
        }        
    });

}