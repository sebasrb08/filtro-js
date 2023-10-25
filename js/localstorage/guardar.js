export function guardar(key){
    let array=JSON.parse(localStorage.getItem(key))
    if (!array){
        array=[]
    }
    return array
}