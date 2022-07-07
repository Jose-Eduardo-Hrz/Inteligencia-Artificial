
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

// Algoritmo Busqueda Bidireccional
export class Bidireccional {
    static buscar(nodoInicial, nodoFinal) {

        if (nodoFinal.compararCeldas(nodoInicial))
            return nodoInicial

        let frontera_Adelante = {}
        frontera_Adelante[nodoInicial.celdas] = nodoInicial

        let frontera_Atras = {}
        frontera_Atras[nodoFinal.celdas] = nodoFinal

        let expandidos = {}

        while (Object.keys(frontera_Adelante).length > 0 | Object.keys(frontera_Atras).length > 0) {

            let frontera_temporal_adelante = {}
            let frontera_temporal_atras = {}

            for (let llave in frontera_Adelante) {
                expandidos[llave] = frontera_Adelante[llave]
                for (let nodo of frontera_Adelante[llave].expandir()) {
                    if (frontera_Atras.hasOwnProperty(nodo.celdas)) {
                        nodo.interseccion = true
                        frontera_Atras[nodo.celdas].interseccion = true
                        return { nodoFronteraAdelante : nodo , nodoFronteraAtras : frontera_Atras[nodo.celdas] }
                    }
                    if (!expandidos.hasOwnProperty(nodo.celdas)) {
                        frontera_temporal_adelante[nodo.celdas] = nodo
                    }
                }
            }
            frontera_Adelante = frontera_temporal_adelante

            for (let llave in frontera_Atras){
                expandidos[llave] = frontera_Atras[llave]
                for( let nodo of frontera_Atras[llave].expandir() ){
                    if( frontera_Adelante.hasOwnProperty(nodo.celdas) ){
                        nodo.interseccion = true
                        frontera_Adelante[nodo.celdas].interseccion = true
                        return { nodoFronteraAdelante : frontera_Adelante[nodo.celdas] , nodoFronteraAtras : nodo }
                    }
                    if( !expandidos.hasOwnProperty( nodo.celdas ) ){
                        frontera_temporal_atras[nodo.celdas] = nodo
                    }
                }
            }
            frontera_Atras = frontera_temporal_atras
        }
    }
}