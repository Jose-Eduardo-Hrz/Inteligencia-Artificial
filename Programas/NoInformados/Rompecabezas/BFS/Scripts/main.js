import { mostrarCeldas , celda_cero } from './DatosIds.js'
import { Puzzle } from './Puzzle.js'
import { BFS , obtenerNumeroNodos , obtenerNumeroRamas } from './BFS.js'
import { recorrerArbol , recorrerTrayactoria } from './Diagrama.js'

document.getElementById('btnIniciarBusqueda').onclick = () => {

    document.getElementById('nodoPrincipal').innerHTML = ""
    document.getElementById('ContenedorRuta').innerHTML = ""

    let nodoPadre = new Puzzle( null , null , 0 )
    nodoPadre.modificarCeldas( mostrarCeldas() , celda_cero )

    let nodoObjetivo = BFS.buscar( nodoPadre , new Puzzle( null , null , 0 ) )

    if( nodoObjetivo.profundidad < 10 ){
        Swal.fire({ 'icon' : 'success', title: '¡Solucion Encontrada!'})
        recorrerArbol( nodoPadre , document.getElementById('nodoPrincipal') )
        recorrerTrayactoria( nodoObjetivo , document.getElementById('ContenedorRuta') )
    }else{
        Swal.fire({ 'icon' : 'success', title: '¡Solucion Encontrada!' , text : '¡Pero! No se muestra el diagrama de árbol por la cantidad de nodos'})
        recorrerTrayactoria( nodoObjetivo , document.getElementById('ContenedorRuta') )
    }

    document.getElementById('Numero_Nodos').innerText = obtenerNumeroNodos( nodoPadre ) + " nodos"
    document.getElementById('Numero_Profundidad').innerText = nodoObjetivo.profundidad
    document.getElementById('Numero_Ramas').innerText = obtenerNumeroRamas( nodoPadre ) + " ramas"

}