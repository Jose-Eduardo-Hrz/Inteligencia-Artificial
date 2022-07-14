import java.util.ArrayList;

public class Principal {
    public static void main(String[] args) {
        
        Rompecabezas nodoInicial = new Rompecabezas( null , null , 0 );
        nodoInicial.revolverCeldas(3);
        
        System.out.println( "Nodo Inicial: " );
        nodoInicial.mostrarRompecabezas();

        ArrayList<Rompecabezas> camino = DFS.Bucar( nodoInicial , new Rompecabezas( null , null , 0 ) );

        System.out.println( "Camino:" );

        for( int i = 0 ; i < camino.size() ; i++ ){
            camino.get(i).mostrarRompecabezas();
        }

    }
}
