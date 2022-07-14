from Rompecabezas import Rompecabezas
from BFS import BFS

print( "Proporcione el Tablero:" )
renglon1 = list(map( int , input().split() ))
renglon2 = list(map( int , input().split() ))
renglon3 = list(map( int , input().split() ))

nodoInicial = Rompecabezas()
nodoInicial.modificarCeldas( renglon1+renglon2+renglon3 )

print( "Nodo Inicial: " )
print( nodoInicial )

ruta = BFS.Buscar( nodoInicial , Rompecabezas() )

print( "Ruta de Solucion: " )
for nodo in ruta:
   print( nodo )