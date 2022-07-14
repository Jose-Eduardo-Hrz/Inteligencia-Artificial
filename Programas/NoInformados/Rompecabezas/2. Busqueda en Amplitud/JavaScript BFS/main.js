import { Rompecabezas } from "./Rompecabezas.js";
import { BFS } from "./BFS.js"

let tablero = [
    0 , 2 , 3 ,
    1 , 5 , 6 ,
    4 , 7 , 8
]

const nodoInicial = new Rompecabezas()
nodoInicial.modificarCeldas( tablero )

console.log( "Nodo Inicial:" );
console.log( nodoInicial.mostrarRompecabezas() )

let ruta = BFS.Buscar( nodoInicial , new Rompecabezas() )

console.log( "Camino:" );

for( let nodo of ruta ){
    console.log( nodo.mostrarRompecabezas() );
}