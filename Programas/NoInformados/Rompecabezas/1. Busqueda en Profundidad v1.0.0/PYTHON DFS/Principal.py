from Rompecabezas import Rompecabezas
from DFS import DFS

nodoInicial = Rompecabezas()
nodoInicial.revolverCeldas( 5 )

print( "Nodo Inicial: " )
print( nodoInicial )

ruta = DFS.Buscar( nodoInicial , Rompecabezas() )

print( "Ruta de Solucion: " )
for nodo in ruta:
   print( nodo )
