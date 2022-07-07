
export function recorrerArbol( nodoPadre , contenedorPrincipal ){

    let li = document.createElement("li")
    contenedorPrincipal.appendChild( li )

    let div = document.createElement("div")
    li.appendChild( div )
    div.className = "nodo"
    if( nodoPadre.objetivo )
        div.innerHTML = crearTablaObjetivo( nodoPadre.mostrarPuzzle() )
    else if( nodoPadre.interseccion )
        div.innerHTML = crearTablaInterseccion( nodoPadre.mostrarPuzzle() )
    else
        div.innerHTML = crearTabla( nodoPadre.mostrarPuzzle() )

    let nodos = nodoPadre.hijos

    if( nodos.length == 0 )
        return;

    let ul = document.createElement("ul")
    li.appendChild( ul )

    for( let i = 0 ; i < nodos.length ; i++ ){
        recorrerArbol( nodos[i] , ul )
    }

}

export function recorrerTrayactoria( nodoFronteraAdelante , nodoFronteraAtras , contenedor_Id ){
    while( nodoFronteraAdelante.nodoPadre ){
        crearCeldaTrayactoria( nodoFronteraAdelante , 'afterbegin' , contenedor_Id )
        nodoFronteraAdelante = nodoFronteraAdelante.nodoPadre
    }
    crearCeldaTrayactoria( nodoFronteraAdelante , 'afterbegin', contenedor_Id )
    nodoFronteraAtras = nodoFronteraAtras.nodoPadre
    while( nodoFronteraAtras.nodoPadre ){
        crearCeldaTrayactoria( nodoFronteraAtras , 'beforeend' , contenedor_Id )
        nodoFronteraAtras = nodoFronteraAtras.nodoPadre
    }
    crearCeldaTrayactoria( nodoFronteraAtras , 'beforeend' , contenedor_Id )
}

function crearCeldaTrayactoria( nodo , posicion , contenedor_Id ){

    let tabla = ''
    if( nodo.objetivo )
        tabla = crearTablaObjetivo( nodo.mostrarPuzzle() )
    else if( nodo.interseccion )
        tabla = crearTablaInterseccion( nodo.mostrarPuzzle() )
    else
        tabla = crearTabla( nodo.mostrarPuzzle() )

    contenedor_Id.insertAdjacentHTML( posicion , `
    <div class="celdaCambio">
        <div class="seccionNumeroCambio">
            <div class="numeroCambio">${nodo.profundidad}</div>
        </div>
        ${tabla}
    </div>
` )
}

function crearTabla( celdas ){
    let tabla = `<div class="TablaOpcion">`

    for( let i = 0 ; i < 9 ; i++ ){
        tabla += `<div class ="celda ${ celdas[i] == 0 ? "vacio" : "" }">${ celdas[i] != 0 ? celdas[i] : ""}</div>`
    }

    tabla += `</div>`
    return tabla;
}

function crearTablaObjetivo( celdas ){
    let tabla = `<div class="TablaOpcionFinal">`

    for( let i = 0 ; i < 9 ; i++ ){
        tabla += `<div class ="celdaFinal ${ celdas[i] == 0 ? "vacio" : "" }">${ celdas[i] != 0 ? celdas[i] : ""}</div>`
    }

    tabla += `</div>`
    return tabla;
}

function crearTablaInterseccion( celdas ){
    let tabla = `<div class="TablaOpcionInterseccion">`

    for( let i = 0 ; i < 9 ; i++ ){
        tabla += `<div class ="celdaInterseccion ${ celdas[i] == 0 ? "vacio" : "" }">${ celdas[i] != 0 ? celdas[i] : ""}</div>`
    }

    tabla += `</div>`
    return tabla;
}