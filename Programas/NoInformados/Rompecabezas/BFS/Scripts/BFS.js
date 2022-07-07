
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

// Algoritmo Busqueda en Profundidad
export class BFS {
    static buscar(nodoInicial, nodoFinal) {
        let agenda = []
        let configuracionesExploradas = new Set()

        if (nodoFinal.compararCeldas(nodoInicial)){
            nodoInicial.objetivo = true
            return nodoInicial
        }

        agenda.push(nodoInicial)

        while (agenda.length > 0) {

            let nodo = agenda.shift()

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