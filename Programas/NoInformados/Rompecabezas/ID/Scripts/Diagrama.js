
export function recorrerArbol( nodoPadre , contenedorPrincipal ){

    let li = document.createElement("li")
    contenedorPrincipal.appendChild( li )

    let div = document.createElement("div")
    li.appendChild( div )
    div.className = "nodo"
    div.innerHTML =  nodoPadre.objetivo ? crearTablaObjetivo( nodoPadre.mostrarPuzzle() ) : crearTabla( nodoPadre.mostrarPuzzle() )
    div.href = "#"

    let nodos = nodoPadre.hijos

    if( nodos.length == 0 )
        return;

    let ul = document.createElement("ul")
    li.appendChild( ul )

    for( let i = 0 ; i < nodos.length ; i++ ){
        recorrerArbol( nodos[i] , ul )
    }

}

export function recorrerTrayactoria( nodo , contenedor_Id ){
    while( nodo.nodoPadre ){
        crearCeldaTrayactoria( nodo , contenedor_Id )
        nodo = nodo.nodoPadre
    }
    crearCeldaTrayactoria( nodo , contenedor_Id )
}

function crearCeldaTrayactoria( nodo , contenedor_Id ){
    contenedor_Id.insertAdjacentHTML( 'afterbegin' , `
    <div class="celdaCambio">
        <div class="seccionNumeroCambio">
            <div class="numeroCambio">${nodo.profundidad}</div>
        </div>
        ${nodo.objetivo ? crearTablaObjetivo( nodo.mostrarPuzzle() ) : crearTabla( nodo.mostrarPuzzle() )}
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