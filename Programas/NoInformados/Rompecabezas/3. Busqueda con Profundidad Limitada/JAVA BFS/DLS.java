import java.util.ArrayList;
import java.util.Collections;

public class DLS {

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

    // Algoritmo Busqueda con Profundidad Limitada
    public static ArrayList<Rompecabezas> Buscar( Rompecabezas nodoInicial , Rompecabezas nodoFinal , int profundidad_maxima ){
        if( nodoFinal.compararCeldas( nodoInicial ) )
            return Trayectoria(nodoInicial);

        if( nodoInicial.profundidad == profundidad_maxima )
            return null;

        ArrayList<Rompecabezas> hijos = nodoInicial.expandirNodos();

        for( int i = 0 ; i < hijos.size() ; i++ ){
            ArrayList<Rompecabezas> resultado = Buscar( hijos.get(i) , nodoFinal, profundidad_maxima);
            if( resultado != null )
                return resultado;
        }

        return null;

    }
}
