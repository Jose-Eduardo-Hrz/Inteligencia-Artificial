
export let celdas_Ids = document.querySelectorAll('.celdaControl')

celdas_Ids.forEach( celda => {
    celda.addEventListener('click', moverCelda )
})

export let celda_cero = 8

function moverCelda(e){

    let id_celda_cero = document.getElementById( `celda${celda_cero}` )
    let posicion_celda_seleccionada = parseInt(  e.target.id.charAt(5) )

    if( posicion_celda_seleccionada == celda_cero )
        return

    if( posicion_celda_seleccionada == celda_cero - 3 ){
        let valorCelda = e.target.innerText
        e.target.innerText = ""
        e.target.classList.add("celdaVacio")
        id_celda_cero.innerText = valorCelda
        id_celda_cero.classList.remove("celdaVacio")
        celda_cero = celda_cero - 3
    }else if( posicion_celda_seleccionada == celda_cero + 3 ){
        let valorCelda = e.target.innerText
        e.target.innerText = ""
        e.target.classList.add("celdaVacio")
        id_celda_cero.innerText = valorCelda
        id_celda_cero.classList.remove("celdaVacio")
        celda_cero = celda_cero + 3
    }else if( posicion_celda_seleccionada == celda_cero - 1 && celda_cero % 3 != 0 ){
        let valorCelda = e.target.innerText
        e.target.innerText = ""
        e.target.classList.add("celdaVacio")
        id_celda_cero.innerText = valorCelda
        id_celda_cero.classList.remove("celdaVacio")
        celda_cero = celda_cero - 1
    }else if( posicion_celda_seleccionada == celda_cero + 1 && celda_cero % 3 != 2 ){
        let valorCelda = e.target.innerText
        e.target.innerText = ""
        e.target.classList.add("celdaVacio")
        id_celda_cero.innerText = valorCelda
        id_celda_cero.classList.remove("celdaVacio")
        celda_cero = celda_cero + 1
    }

}

export function mostrarCeldas(){
    let arr = []
    celdas_Ids.forEach( celda => {
        let valor = parseInt( celda.innerText )
        arr.push( valor ? valor : 0 )
    })
    return arr
}