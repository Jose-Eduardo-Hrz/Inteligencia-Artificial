// Los elementos de cada celda
export const secuencia = [0, 1, 2, 3, 4, 5, 6, 7, 8]

// Movimientos que se pueden realizar para cada celda
// N: Arriba
// E: Derecha
// S: Abajo
// O Izquierda
export const acciones = ['E', 'N', 'O', 'S']

// Funcion que permite obtener un elemento para filtrar una celda
// Ejemplo: si posicionCelda = 3
// Numero binario: 1111000000000000   ,    Numero Decimal: 61440
export var filtro_celda = posicionCelda => BigInt(15) << BigInt(4 * posicionCelda)

// Se obtiene el valor de la celda
// Ejemplo:
// Si posicionCelda = 2  y  celdas = 35557360385 (Decimal) 1000 0101 0111 0110 0010 0100 0011 0000 0001 (Binario)
// return 3 (Decimal) 0011 (Binario)
export var obtenerCelda = (posicionCelda, celdas) => (celdas & filtro_celda(posicionCelda)) >> BigInt(4 * posicionCelda)

/*
  Variable que almacena los movimientos validos para cada celda

  Las posiciones de las celdas visualmente se veran de la siguiente manera:

  0   1   2
  3   4   5
  6   7   8

  Pero, se trataran de la siguienete manera:

  2   1   0
  5   4   3
  8   7   6

  Ya que, las posciones de cada celda se almacenan de menor a mayor, de derecha a izquieda

  Numero entero de 64bits: 0000  0000  0000  0000  0000  0000  0000  0000  0000  0000  0000  0000  0000  0000  0000  0000
  posicion de la celda:     15    14    13    12    11    10     9     8     7     6     5     4     3     2     1     0  

SOLO SE UTILIZAN ESTAS ESTAS POSCIONES YA QUE EL ROMPECABEZAS ES DE 3X3: ^     ^     ^     ^     ^     ^     ^     ^     ^
*/

// Movimientos que se pueden realizar para cada celda
// E: Arriba
// N: Derecha
// S: Abajo
// O Izquierda
export var movimientos_validos = {
    0: ['S', 'O'],
    1: ['E', 'S', 'O'],
    2: ['E', 'S'],
    3: ['N', 'S', 'O'],
    4: ['N', 'E', 'S', 'O'],
    5: ['N', 'E', 'S'],
    6: ['N', 'O'],
    7: ['N', 'O', 'E'],
    8: ['N', 'E']
}


export function mover_celda_izquierda(rompecabezas) {
    // Se verifica que la posicion de la celda con el valor 0 (espacio vacio)
    // no se encuentre en la ultima columna
    if (!(rompecabezas.cero % 3 == 2)) {
        rompecabezas.cero += 1
        let comparador = filtro_celda(rompecabezas.cero)
        rompecabezas.celdas = ((rompecabezas.celdas & comparador) >> 4n) | (rompecabezas.celdas & (~comparador))
    }
}

export function mover_celda_derecha(rompecabezas) {
    // Se verifica que la posicion de la celda con el valor 0 (espacio vacio)
    // no se encuentre en la primera columna
    if (!(rompecabezas.cero % 3 == 0)) {
        rompecabezas.cero -= 1
        let comparador = filtro_celda(rompecabezas.cero)
        rompecabezas.celdas = ((rompecabezas.celdas & comparador) << 4n) | (rompecabezas.celdas & (~comparador))
    }
}

export function mover_celda_arriba(rompecabezas) {
    // Se verifica que la posicion de la celda con el valor 0 (espacio vacio)
    // no se encuentre en el primer renglon
    if (!(rompecabezas.cero <= 2)) {
        rompecabezas.cero = rompecabezas.cero - 3
        let comparador = filtro_celda(rompecabezas.cero)
        rompecabezas.celdas = ((rompecabezas.celdas & comparador) << 12n) | (rompecabezas.celdas & (~comparador))
    }
}

export function mover_celda_abajo(rompecabezas) {
    // Se verifica que la posicion de la celda con el valor 0 (espacio vacio)
    // no se encuentre en el ultimo renglon
    if (!(rompecabezas.cero >= 6)) {
        rompecabezas.cero = rompecabezas.cero + 3
        let comparador = filtro_celda(rompecabezas.cero)
        rompecabezas.celdas = ((rompecabezas.celdas & comparador) >> 12n) | (rompecabezas.celdas & (~comparador))
    }
}
