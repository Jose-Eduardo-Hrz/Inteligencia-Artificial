
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

export function obtenerProfundidad(nodoInicial) {
    if (nodoInicial.hijos == 0)
        return 1
    let numeroMayor = 0
    for (let i = 0; i < nodoInicial.hijos.length; i++) {
        let valorHijo = obtenerProfundidad(nodoInicial.hijos[i])
        if (valorHijo > numeroMayor)
            numeroMayor = valorHijo
    }
    return numeroMayor + 1
}

// Algoritmo Busqueda en Profundidad
export class DLS {
    static buscar(nodoInicial, nodoFinal , profundidad_maxima) {

        if( nodoFinal.compararCeldas( nodoInicial ) ){
            nodoInicial.objetivo = true
            return nodoInicial
        }

        if( nodoInicial.profundidad == profundidad_maxima )
            return null

        let nodosHijos = nodoInicial.expandir()

        for( let i = 0 ; i < nodosHijos.length ; i++ ){
            let resultado = DLS.buscar( nodosHijos[i] , nodoFinal , profundidad_maxima )
            if( resultado )
                return resultado
        }
        return null

    }
}