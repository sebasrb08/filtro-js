import { guardar } from "../localstorage/guardar.js";
import { mostrarReporte } from "../mostrarReporte.js";

let campers="campers"
let arrayCampers=guardar(campers)

mostrarReporte(arrayCampers)