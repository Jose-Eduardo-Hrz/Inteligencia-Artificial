import { DLS } from './DLS.js'

export function obtenerNumeroNodos(nodoInicial) {
    if (nodoInicial.hijos == 0)
        return 1
    let hijos = 0
    for (let i = 0; i < nodoInicial.hijos.length; i++) {
        hijos = hijos + obtenerNumeroNodos(nodoInicial.hijos[i])
    }
    return hijos + 1
}

export function obtenerNumeroRamas(nodoInicial) {
    if (nodoInicial.hijos == 0)
        return 1
    let hijos = 0
    for (let i = 0; i < nodoInicial.hijos.length; i++) {
        hijos = hijos + obtenerNumeroRamas(nodoInicial.hijos[i])
    }
    return hijos
}

export class ID{
    static Buscar( nodoInicial , nodoDestino ){

        if( nodoDestino.compararCeldas( nodoInicial ) )
            return nodoInicial
        
        let profundidad = 1

        let resultado = null

        while( !resultado ){
            resultado = DLS.buscar( nodoInicial , nodoDestino , profundidad )
            if( !resultado )
                nodoInicial.limpiarHijos()
            profundidad++
        }
        return resultado
    }
}