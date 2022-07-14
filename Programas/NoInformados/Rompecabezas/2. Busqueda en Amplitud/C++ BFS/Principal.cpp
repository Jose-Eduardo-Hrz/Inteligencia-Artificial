#include "./Header/Rompecabezas.h"
#include "./Header/BFS.h"
#include<vector>

int main(){

    int tablero[9];
    std::cout << "Proporcione el tablero:" << "\n";
    for( int i = 0 ; i < 9 ; i++ ){
        std::cin >> tablero[i];
    }

    Rompecabezas * n1 = new Rompecabezas( nullptr , ' ' , 0 );
    n1->modificarCeldas(tablero);

    std::cout << "Nodo Inicial" << "\n";
    n1->mostrarRompecabezas();

    std::vector<Rompecabezas*> ruta = BFS::Bucar( n1 , new Rompecabezas( nullptr , ' ' , 0 ) );
    
    std::cout << "Ruta" << "\n";

    for( int i = ruta.size()-1 ; i >= 0 ; i-- ){
        ruta[i]->mostrarRompecabezas();
    }

}