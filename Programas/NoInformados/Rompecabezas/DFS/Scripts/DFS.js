
export function obtenerNumeroNodos(nodo) {
    let numeroNodos = 0
    while( nodo.nodoPadre ){
        numeroNodos = numeroNodos + nodo.hijos.length
        nodo = nodo.nodoPadre
    }
    return 1 + nodo.hijos.length + numeroNodos
}

export function obtenerNumeroRamas(nodo) {
    let numeroRamas = 1
    while( nodo.nodoPadre ){
        if( nodo.hijos.length > 1 )
            numeroRamas = numeroRamas + nodo.hijos.length-1
        nodo = nodo.nodoPadre
    }
    if( nodo.hijos.length > 1 )
        numeroRamas = numeroRamas + nodo.hijos.length-1
    return numeroRamas
}

// Algoritmo Busqueda en Profundidad
export class DFS {
    static buscar(nodoInicial, nodoFinal) {
        let agenda = []
        let configuracionesExploradas = new Set()

        if (nodoFinal.compararCeldas(nodoInicial)){
            nodoInicial.objetivo = true
            return nodoInicial
        }

        agenda.push(nodoInicial)

        while (agenda.length > 0) {

            let nodo = agenda.pop()

            configuracionesExploradas.add(nodo.celdas)

            for (let hijo of nodo.expandir()) {

                if (nodoFinal.compararCeldas(hijo)){
                    hijo.objetivo = true
                    return hijo
                }
                else if (!configuracionesExploradas.has(hijo.celdas))
                    agenda.push(hijo)
            }
        }

        return null
    }
}