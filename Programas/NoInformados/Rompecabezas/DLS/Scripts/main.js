import { mostrarCeldas , celda_cero } from './DatosIds.js'
import { Puzzle } from './Puzzle.js'
import { DLS , obtenerNumeroNodos , obtenerNumeroRamas , obtenerProfundidad } from './DLS.js'
import { recorrerArbol , recorrerTrayactoria } from './Diagrama.js'

document.getElementById('btnIniciarBusqueda').onclick = () => {

    document.getElementById('nodoPrincipal').innerHTML = ""
    document.getElementById('ContenedorRuta').innerHTML = ""

    let valor_input = document.getElementById('NumeroProfundidad').value
    let profundidad_maxima = parseInt( valor_input )

    if( !profundidad_maxima ){
        Swal.fire({ 'icon' : 'error', title: '¡Error!' , text: "En el input se debe colocar un número y debe ser mayor a cero" })
        return
    }

    let nodoPadre = new Puzzle( null , null , 0 )
    nodoPadre.modificarCeldas( mostrarCeldas() , celda_cero )

    let nodoObjetivo = DLS.buscar( nodoPadre , new Puzzle( null , null , 0 ) , profundidad_maxima )

    document.getElementById('Numero_Nodos').innerText = obtenerNumeroNodos( nodoPadre ) + " nodos"
    let profundidad = nodoObjetivo ? nodoObjetivo.profundidad : obtenerProfundidad( nodoPadre )-1
    document.getElementById('Numero_Profundidad').innerText = profundidad
    document.getElementById('Numero_Ramas').innerText = obtenerNumeroRamas( nodoPadre ) + " ramas"

    if( !nodoObjetivo ){
        Swal.fire({ 'icon' : 'warning', title: '¡Solucion No Encontrada!' , text : 'Se muestra solo el diagrama de árbol e información de la búsqueda' })
        if( profundidad < 10 )
        recorrerArbol( nodoPadre , document.getElementById('nodoPrincipal') )
        return
    }
    
    if( nodoObjetivo.profundidad < 10 ){
        Swal.fire({ 'icon' : 'success', title: '¡Solucion Encontrada!'})
        recorrerArbol( nodoPadre , document.getElementById('nodoPrincipal') )
    }else{
        Swal.fire({ 'icon' : 'success', title: '¡Solucion Encontrada!' , text : '¡Pero! No se muestra el diagrama de árbol por la cantidad de nodos'})
    }

    recorrerTrayactoria( nodoObjetivo , document.getElementById('ContenedorRuta') )

}