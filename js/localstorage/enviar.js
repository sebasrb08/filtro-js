export function enviar(arr,key){
    localStorage.setItem(key,JSON.stringify(arr))
}