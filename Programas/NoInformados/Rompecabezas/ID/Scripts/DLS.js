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