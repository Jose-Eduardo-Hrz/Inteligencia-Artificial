import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;

public class DFS {

    // Recupera los nodos visitados para llegar al nodo final
    private static ArrayList<Rompecabezas> trayectoria( Rompecabezas nodoFinal ){
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
    public static ArrayList<Rompecabezas> Bucar( Rompecabezas nodoInicial , Rompecabezas nodoFinal ){
        ArrayList<Rompecabezas> agenda = new ArrayList<>();
        HashSet<Long> configuracionesExploradas = new HashSet<>();

        if( nodoFinal.compararCeldas(nodoInicial) )
            return trayectoria(nodoInicial);
        
        agenda.add( nodoInicial );

        while( agenda.size() > 0 ){
            Rompecabezas nodo = agenda.remove( agenda.size()-1 );

            configuracionesExploradas.add( nodo.tablero );
            for( Rompecabezas hijo : nodo.expandirNodos() ){
                if( nodoFinal.compararCeldas(hijo) )
                    return trayectoria( hijo );
                else if( !configuracionesExploradas.contains( hijo.tablero ) )
                    agenda.add( hijo );
            }
        }

        return null;
    }
}
