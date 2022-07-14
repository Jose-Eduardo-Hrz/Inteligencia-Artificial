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

        System.out.println( "Proporcione la profundidad maxima:" );
        int profundidad_maxima = entrada.nextInt();
        
        Rompecabezas nodoInicial = new Rompecabezas( null , null , 0 );
        nodoInicial.modificarCeldas(tablero);

        System.out.println( "Nodo Inicial: " );
        nodoInicial.mostrarRompecabezas();

        ArrayList<Rompecabezas> camino = DLS.Buscar( nodoInicial , new Rompecabezas( null , null , 0 ) , profundidad_maxima );

        System.out.println( "Camino:" );

        if( camino == null ){
            System.out.println( "No se logro obtener la solucion !!!" );
        }else{
            for( int i = 0 ; i < camino.size() ; i++ ){
                camino.get(i).mostrarRompecabezas();
            }
        }


    }
}
