import java.util.ArrayList;

public class Rompecabezas {

  public int cero;
  public long tablero;
  public Rompecabezas nodoPadre;
  public int profundidad;

  public Rompecabezas(Rompecabezas nodoPadre, String accion, int profundidad) {
    this.nodoPadre = nodoPadre;
    this.profundidad = profundidad;
    if (nodoPadre == null) {
      this.tablero = 0;
      for (int valor : Gestor.elementos) {
        this.tablero = this.tablero | ((long) valor << (long) (4 * (valor - 1)));
      }
      this.cero = 8;
    } else {
      this.tablero = nodoPadre.tablero;
      this.cero = nodoPadre.cero;
      if (accion != null)
        mover(accion);
    }
  }

  public void mover(String accion) {
    if (accion == "N")
      Gestor.mover_celda_arriba(this);
    else if (accion == "E")
      Gestor.mover_celda_derecha(this);
    else if (accion == "S")
      Gestor.mover_celda_abajo(this);
    else if (accion == "O")
      Gestor.mover_celda_izquierda(this);
  }

  public void mostrarRompecabezas() {
    for (int i = 0; i < 9; i++) {
      System.out.print(Gestor.obtenerCelda(i, this.tablero) + " ");
      if (i % 3 == 2)
        System.out.println();
    }
    System.out.println();
  }

  public Boolean compararCeldas(Rompecabezas otro) {
    return otro.tablero == this.tablero;
  }

  public void revolverCeldas(int numeroMovimientos) {
    for (int i = 0; i < numeroMovimientos; i++) {
      String[] movimientos_validos_cero = Gestor.movimientos_validos.get(
          this.cero);
      int posicion_movimientos = (int) (Math.random() * (movimientos_validos_cero.length - 1 - 0 + 1) + 0);
      mover(movimientos_validos_cero[posicion_movimientos]);
    }
  }

  public ArrayList<Rompecabezas> expandirNodos() {
    ArrayList<Rompecabezas> nodos = new ArrayList<>();
    for (String movimiento : Gestor.movimientos_validos.get(this.cero)) {
      Rompecabezas nodo = new Rompecabezas(
          this,
          movimiento,
          this.profundidad + 1);
      if (this.nodoPadre != null) {
        if (nodo.tablero != this.nodoPadre.tablero)
          nodos.add(nodo);
      } else {
        nodos.add(nodo);
      }
    }
    return nodos;
  }
}
