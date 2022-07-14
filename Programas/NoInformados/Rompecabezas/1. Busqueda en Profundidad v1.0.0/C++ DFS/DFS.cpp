#include "./Header/DFS.h"

std::vector<Rompecabezas*> DFS::trayectoria( Rompecabezas * nodoFinal ){
    std::vector<Rompecabezas*> secuencia;
    secuencia.push_back( nodoFinal );
    while( nodoFinal->nodopadre != nullptr ){
        nodoFinal = nodoFinal->nodopadre;
        secuencia.push_back( nodoFinal );
    }
    return secuencia;
}

std::vector<Rompecabezas*> DFS::Bucar( Rompecabezas * nodoInicial , Rompecabezas * nodoFinal ){
    std::vector<Rompecabezas*> agenda;
    std::set<unsigned long long> configuracionesExploradas;

    if( nodoFinal->compararCeldas(nodoInicial) )
        return DFS::trayectoria(nodoInicial);
        
    agenda.push_back( nodoInicial );

    while( agenda.size() > 0 ){
        Rompecabezas * nodo = agenda.back();
        agenda.pop_back();

        configuracionesExploradas.insert( nodo->tablero );
        for( Rompecabezas * hijo : nodo->expandirNodos() ){
            if( nodoFinal->compararCeldas(hijo) )
                return DFS::trayectoria( hijo );
            else if( !configuracionesExploradas.count( hijo->tablero ) )
                agenda.push_back( hijo );
        }
    }

    std::cout << "Llego hasta aqui !!!\n";
    return DFS::trayectoria( new Rompecabezas( nullptr , ' ' , 0 ) );
}