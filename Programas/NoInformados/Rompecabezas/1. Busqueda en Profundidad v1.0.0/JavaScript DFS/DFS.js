// Recupera los nodos visitados para llegar al nodo final
function trayectoria( nodoFinal ){
    let secuencia = []
    secuencia.push( nodoFinal )
    while( nodoFinal.nodoPadre ){
        nodoFinal = nodoFinal.nodoPadre
        secuencia.push( nodoFinal )
    }
    secuencia.reverse()
    return secuencia
}

// Algoritmo Busqueda en Profundidad
export class DFS {
    static Buscar(nodoInicial, nodoFinal) {

        let agenda = []
        let configuracionesExploradas = new Set()

        if (nodoFinal.compararCeldas(nodoInicial))
            return trayectoria( nodoInicial )

        agenda.push(nodoInicial)

        while (agenda.length > 0) {

            let nodo = agenda.pop()

            configuracionesExploradas.add(nodo.celdas)

            for (let hijo of nodo.expandir()) {
                if (nodoFinal.compararCeldas(hijo))
                    return trayectoria(hijo)
                else if (!configuracionesExploradas.has(hijo.celdas))
                    agenda.push(hijo)
            }
        }

        return null
    }
}