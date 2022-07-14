#include "./Header/Rompecabezas.h"
#include "./Header/DFS.h"

int main(){

    Rompecabezas * n1 = new Rompecabezas( nullptr , ' ' , 0 );
    n1->revolverCeldas(3);

    std::cout << "Nodo Inicial" << "\n";
    n1->mostrarRompecabezas();

    std::cout << "Ruta" << "\n";

    std::vector<Rompecabezas*> ruta = DFS::Bucar( n1 , new Rompecabezas( nullptr , ' ' , 0 ) );

    for( int i = ruta.size()-1 ; i >= 0 ; i-- ){
        ruta[i]->mostrarRompecabezas();
    }

}