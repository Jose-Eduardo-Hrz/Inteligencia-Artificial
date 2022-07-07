import { mostrarCeldas , celda_cero } from './DatosIds.js'
import { Puzzle } from './Puzzle.js'
import { DFS , obtenerNumeroNodos , obtenerNumeroRamas } from './DFS.js'
import { recorrerArbol , recorrerTrayactoria } from './Diagrama.js'

document.getElementById('btnIniciarBusqueda').onclick = () => {

    document.getElementById('nodoPrincipal').innerHTML = ""
    document.getElementById('ContenedorRuta').innerHTML = ""

    let nodoPadre = new Puzzle( null , null , 0 )
    nodoPadre.modificarCeldas( mostrarCeldas() , celda_cero )

    let nodoObjetivo = DFS.buscar( nodoPadre , new Puzzle( null , null , 0 ) )

    if( nodoObjetivo.profundidad < 120 ){
        Swal.fire({ 'icon' : 'success', title: '¡Solucion Encontrada!'})
        recorrerArbol( nodoPadre , document.getElementById('nodoPrincipal') )
        recorrerTrayactoria( nodoObjetivo , document.getElementById('ContenedorRuta') )
    }else if( nodoObjetivo.profundidad < 500 ){
        Swal.fire({ 'icon' : 'success', title: '¡Solucion Encontrada!' , text : '¡Pero! No se muestra el diagrama de árbol por la profundidad'})
        recorrerTrayactoria( nodoObjetivo , document.getElementById('ContenedorRuta') )
    }else{
        Swal.fire({ 'icon' : 'warning', title: '¡Solucion Encontrada!' , text : '¡Pero! No se puede mostrar los diagramas por la cantidad de nodos'})
    }

    document.getElementById('Numero_Nodos').innerText = obtenerNumeroNodos( nodoObjetivo ) + " nodos"
    document.getElementById('Numero_Profundidad').innerText = nodoObjetivo.profundidad
    document.getElementById('Numero_Ramas').innerText = obtenerNumeroRamas( nodoObjetivo ) + " ramas"

}