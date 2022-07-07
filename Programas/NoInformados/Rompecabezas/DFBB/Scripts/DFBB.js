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

/*Busqueda en Profundidad con Ramificion y Poda*/
export class DFBB{
    static Buscar( nodoInicial , nodoDestino , profundidad_maxima){

        let solucion = null

        let agenta = []

        if( nodoDestino.compararCeldas( nodoInicial ) ){
            nodoInicial.objetivo = true
            return nodoInicial
        }

        agenta.push( nodoInicial )

        while( agenta.length > 0 ){
            let nodo = agenta.pop()

            if( nodo.profundidad < profundidad_maxima ){
                for( let hijo of nodo.expandir() ){
                    if( nodoDestino.compararCeldas( hijo ) ){
                        solucion = hijo
                        profundidad_maxima = hijo.profundidad
                        hijo.objetivo = true
                    }else{
                        agenta.push( hijo )
                    }
                }
            }
        }
        return solucion
    }

}