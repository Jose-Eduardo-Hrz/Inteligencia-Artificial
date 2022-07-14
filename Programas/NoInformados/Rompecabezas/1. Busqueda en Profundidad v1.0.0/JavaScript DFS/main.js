import { Rompecabezas } from "./Rompecabezas.js";
import { DFS } from "./DFS.js"

const nodoInicial = new Rompecabezas()
nodoInicial.revolverCeldas(5)

console.log( "Nodo Inicial:" );
console.log( nodoInicial.mostrarRompecabezas() );

let ruta = DFS.Buscar( nodoInicial , new Rompecabezas() )

console.log( "Camino:" );

for( let nodo of ruta ){
    console.log( nodo.mostrarRompecabezas() );
}