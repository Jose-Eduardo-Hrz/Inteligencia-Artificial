export const secuencia = [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 ]

export const acciones = ['E','N','O','S']

export var filtro_celda = posicionCelda => BigInt(15) << BigInt(4*posicionCelda)

export var obtenerCelda = ( posicionCelda , celdas ) => ( celdas & filtro_celda(posicionCelda)) >> BigInt(4*posicionCelda)

export var movimientos_validos = {
    0 : [ 'S' , 'O' ],
    1 : [ 'E' , 'S' , 'O' ],
    2 : [ 'E' , 'S' ],
    3 : [ 'N' , 'S' , 'O' ],
    4 : [ 'N' , 'E' , 'S' , 'O' ],
    5 : [ 'N' , 'E' , 'S' ],
    6 : [ 'N' , 'O' ],
    7 : [ 'N' , 'O' , 'E' ],
    8 : [ 'N' , 'E' ]
}

export function mover_celda_izquierda(puzzle){
    if( !(puzzle.cero % 3 == 2) ){
        puzzle.cero += 1
        let comparador = filtro_celda( puzzle.cero )
        puzzle.celdas = ( ( puzzle.celdas & comparador ) >> 4n ) | ( puzzle.celdas & (~comparador) )
    }
}

export function mover_celda_derecha(puzzle){
    if( !(puzzle.cero % 3 == 0) ){
        puzzle.cero -= 1
        let comparador = filtro_celda( puzzle.cero )
        puzzle.celdas = ( ( puzzle.celdas & comparador ) << 4n ) | ( puzzle.celdas & (~comparador) )
    }
}

export function mover_celda_arriba(puzzle){
    if( !(puzzle.cero <= 2) ){
        puzzle.cero = puzzle.cero - 3
        let comparador = filtro_celda( puzzle.cero )
        puzzle.celdas = ( ( puzzle.celdas & comparador ) << 12n ) | ( puzzle.celdas & (~comparador) )
    }
}

export function mover_celda_abajo(puzzle){
    if( !( puzzle.cero >= 6 ) ){
        puzzle.cero = puzzle.cero + 3
        let comparador = filtro_celda( puzzle.cero )
        puzzle.celdas = ( ( puzzle.celdas & comparador ) >> 12n ) | ( puzzle.celdas & (~comparador) )
    }
}
