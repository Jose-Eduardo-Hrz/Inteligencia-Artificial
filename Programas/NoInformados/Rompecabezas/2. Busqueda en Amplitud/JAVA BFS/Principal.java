import java.util.ArrayList;
import java.util.Scanner;

public class Principal {
    public static void main(String[] args) {
        
        Scanner entrada = new Scanner( System.in );
        System.out.println( "Proporcione el tablero:" );
        int tablero[] = new int[9];
        for( int i = 0 ; i < 9 ; i++ ){
            tablero[i] = entrada.nextInt();
        }
        
        Rompecabezas nodoInicial = new Rompecabezas( null , null , 0 );
        nodoInicial.modificarCeldas(tablero);

        System.out.println( "Nodo Inicial: " );
        nodoInicial.mostrarRompecabezas();

        ArrayList<Rompecabezas> camino = BFS.Buscar( nodoInicial , new Rompecabezas( null , null , 0 ) );

        System.out.println( "Camino:" );

        for( int i = 0 ; i < camino.size() ; i++ ){
            camino.get(i).mostrarRompecabezas();
        }

    }
}
