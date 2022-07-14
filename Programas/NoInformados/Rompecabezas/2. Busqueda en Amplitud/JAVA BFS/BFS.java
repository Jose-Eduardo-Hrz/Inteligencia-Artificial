import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;

public class BFS {

    // Recupera los nodos visitados para llegar al nodo final
    private static ArrayList<Rompecabezas> Trayectoria( Rompecabezas nodoFinal ){
        ArrayList<Rompecabezas> secuencia = new ArrayList<>();
        secuencia.add( nodoFinal );
        while( nodoFinal.nodoPadre != null ){
            nodoFinal = nodoFinal.nodoPadre;
            secuencia.add( nodoFinal );
        }
        Collections.reverse(secuencia);
        return secuencia;
    }

    // Algoritmo Busqueda en Profundidad
    public static ArrayList<Rompecabezas> Buscar( Rompecabezas nodoInicial , Rompecabezas nodoFinal ){
        ArrayList<Rompecabezas> agenda = new ArrayList<>();
        HashSet<Long> configuracionesExploradas = new HashSet<>();

        if( nodoFinal.compararCeldas(nodoInicial) )
            return Trayectoria(nodoInicial);
        
        agenda.add( nodoInicial );

        while( agenda.size() > 0 ){
            Rompecabezas nodo = agenda.remove( 0 );

            configuracionesExploradas.add( nodo.tablero );
            for( Rompecabezas hijo : nodo.expandirNodos() ){
                if( nodoFinal.compararCeldas(hijo) )
                    return Trayectoria( hijo );
                else if( !configuracionesExploradas.contains( hijo.tablero ) )
                    agenda.add( hijo );
            }
        }

        return null;
    }
}
