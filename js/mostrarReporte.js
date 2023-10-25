export function mostrarReporte(array){
    let lista= document.querySelector(".lista")
    array.forEach(element => {
        
        lista.innerHTML+=`
            <tr>
            <td>${element.cdn}</td>
            <td>${element.nombre}</td>
            <td>${element.campcoins}</td>
            </tr>
        `
    });
}