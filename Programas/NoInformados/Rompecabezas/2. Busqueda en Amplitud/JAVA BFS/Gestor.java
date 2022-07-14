import java.util.HashMap;

public class Gestor {

  // Los elementos de cada celda
  public static int[] elementos = new int[] { 0, 1, 2, 3, 4, 5, 6, 7, 8 };

  // Movimientos que se pueden realizar para cada celda
  // N: Arriba
  // E: Derecha
  // S: Abajo
  // O Izquierda
  public static String[] acciones = new String[] { "N", "E", "S", "O" };

  // Funcion que permite obtener un elemento para filtrar una celda
  // Ejemplo: si posicionCelda = 3
  // Numero binario: 1111000000000000   ,    Numero Decimal: 61440
  public static long filtro_celda(int posicionCelda) {
    return (long) 15 << (4 * posicionCelda);
  }

  // Se obtiene el valor de la celda
  // Ejemplo:
  // Si posicionCelda = 2  y  celdas = 35557360385 (Decimal) 1000 0101 0111 0110 0010 0100 0011 0000 0001 (Binario)
  // return 3 (Decimal) 0011 (Binario)
  public static long obtenerCelda(int posicionCelda, long tablero) {
    return (
      (tablero & filtro_celda(posicionCelda)) >> (long) (4 * posicionCelda)
    );
  }

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
  public static HashMap<Integer, String[]> movimientos_validos = new HashMap<>() {
    {
      put(0, new String[] { "S", "O" });
      put(1, new String[] { "E", "S", "O" });
      put(2, new String[] { "E", "S" });
      put(3, new String[] { "N", "S", "O" });
      put(4, new String[] { "E", "N", "S", "O" });
      put(5, new String[] { "E", "N", "S" });
      put(6, new String[] { "N", "O" });
      put(7, new String[] { "E", "N", "O" });
      put(8, new String[] { "E", "N" });
    }
  };

  public static void mover_celda_izquierda(Rompecabezas rompecabezas) {
    // Se verifica que la posicion de la celda con el valor 0 (espacio vacio)
    // no se encuentre en la ultima columna
    if (!(rompecabezas.cero % 3 == 2)) {
      rompecabezas.cero += 1;
      long comparador = filtro_celda(rompecabezas.cero);
      rompecabezas.tablero =
        ((rompecabezas.tablero & comparador) >> (long) 4) |
        (rompecabezas.tablero & (~comparador));
    }
  }

  public static void mover_celda_derecha(Rompecabezas rompecabezas) {
    // Se verifica que la posicion de la celda con el valor 0 (espacio vacio)
    // no se encuentre en la primera columna
    if (!(rompecabezas.cero % 3 == 0)) {
      rompecabezas.cero -= 1;
      long comparador = filtro_celda(rompecabezas.cero);
      rompecabezas.tablero =
        ((rompecabezas.tablero & comparador) << (long) 4) |
        (rompecabezas.tablero & (~comparador));
    }
  }

  public static void mover_celda_arriba(Rompecabezas rompecabezas) {
    // Se verifica que la posicion de la celda con el valor 0 (espacio vacio)
    // no se encuentre en el primer renglon
    if (!(rompecabezas.cero <= 2)) {
      rompecabezas.cero = rompecabezas.cero - 3;
      long comparador = filtro_celda(rompecabezas.cero);
      rompecabezas.tablero =
        ((rompecabezas.tablero & comparador) << (long) 12) |
        (rompecabezas.tablero & (~comparador));
    }
  }

  public static void mover_celda_abajo(Rompecabezas rompecabezas) {
    // Se verifica que la posicion de la celda con el valor 0 (espacio vacio)
    // no se encuentre en el ultimo renglon
    if (!(rompecabezas.cero >= 6)) {
      rompecabezas.cero = rompecabezas.cero + 3;
      long comparador = filtro_celda(rompecabezas.cero);
      rompecabezas.tablero =
        ((rompecabezas.tablero & comparador) >> (long) 12) |
        (rompecabezas.tablero & (~comparador));
    }
  }
}
