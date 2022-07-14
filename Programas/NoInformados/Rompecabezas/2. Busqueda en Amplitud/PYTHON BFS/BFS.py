from collections import deque

def trayectoria( nodoFinal ):
    secuencia = deque()
    secuencia.append( nodoFinal )
    while nodoFinal.nodoPadre != None :
        nodoFinal = nodoFinal.nodoPadre
        secuencia.append( nodoFinal )
    secuencia.reverse()
    return secuencia

class BFS:
    
    @staticmethod
    def Buscar( nodoInicial , nodoFinal ):
        agenda = deque()
        configuracionesExploradas = set()

        if( nodoFinal.compararCeldas(nodoInicial) ):
            return trayectoria(nodoInicial)

        agenda.append( nodoInicial )

        while( agenda ):
            nodo = agenda.popleft()

            configuracionesExploradas.add( nodo.tablero )

            for hijo in nodo.expandirNodos():
                if( nodoFinal.compararCeldas(hijo) ):
                    return trayectoria(hijo)
                elif( not(hijo.tablero in configuracionesExploradas) ):
                    agenda.append( hijo )
        return None
