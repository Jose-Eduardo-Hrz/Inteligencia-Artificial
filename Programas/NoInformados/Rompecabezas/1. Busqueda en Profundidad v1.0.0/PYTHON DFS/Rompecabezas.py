from functools import reduce
import random
import Gestor

class Rompecabezas:

    # Constructor
    def __init__(self, nodoPadre=None, accion=None, profundidad=0):

        self.nodoPadre = nodoPadre
        self.profundidad = profundidad

        if( nodoPadre == None ):
            self.tablero = reduce( lambda resultado , elemento: resultado | ( elemento << 4*(elemento-1) ), Gestor.elementos )
            self.cero = 8
        else:
            self.tablero = nodoPadre.tablero
            self.cero = nodoPadre.cero
            if( accion != None):
                self.mover( accion )

    # Metodo para mostrar el tablero 
    def __str__(self):
        tabla = ""
        for i in Gestor.elementos:
            tabla = tabla + str(Gestor.obtenerCelda( i , self.tablero )) + " "
            if (i % 3 == 2):
                tabla = tabla + "\n"
        return tabla

    # Metodo para comparar los tableros
    def compararCeldas(self, otro):
        return otro.tablero == self.tablero

    # Metodo para mover una celda
    def mover(self, accion):
        if accion == 'N':
            Gestor.mover_celda_arriba(self)
        elif accion == 'E':
            Gestor.mover_celda_derecha(self)
        elif accion == 'S':
            Gestor.mover_celda_abajo(self)
        elif accion == 'O':
            Gestor.mover_celda_izquierda(self)

    ## Metodo para revolver el rompecabezas
    def revolverCeldas(self, numeroMovimientos):
        for i in range(0,numeroMovimientos):
            self.mover(random.choice(Gestor.movimientos_validos[self.cero]))

    # Metodo para expandir el nodo padre
    def expandirNodos(self):
        nodos = list()
        for movimiento in Gestor.movimientos_validos[ self.cero ]:
            nodo = Rompecabezas( self , movimiento , self.profundidad+1 )
            if(self.nodoPadre != None):
                if(nodo.tablero != self.nodoPadre.tablero):
                    nodos.append(nodo)
            else:
                nodos.append(nodo)
        return nodos

