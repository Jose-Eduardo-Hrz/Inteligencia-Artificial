#include "./Header/BFS.h"

std::vector<Rompecabezas*> BFS::trayectoria( Rompecabezas * nodoFinal ){
    std::vector<Rompecabezas*> secuencia;
    secuencia.push_back( nodoFinal );
    while( nodoFinal->nodopadre != nullptr ){
        nodoFinal = nodoFinal->nodopadre;
        secuencia.push_back( nodoFinal );
    }
    return secuencia;
}

std::vector<Rompecabezas*> BFS::Bucar( Rompecabezas * nodoInicial , Rompecabezas * nodoFinal ){
    std::vector<Rompecabezas*> agenda;
    std::set<unsigned long long> configuracionesExploradas;

    if( nodoFinal->compararCeldas(nodoInicial) )
        return BFS::trayectoria(nodoInicial);
        
    agenda.push_back( nodoInicial );

    while( agenda.size() > 0 ){
        Rompecabezas * nodo = agenda[0];
        agenda.erase( agenda.begin() );

        configuracionesExploradas.insert( nodo->tablero );
        for( Rompecabezas * hijo : nodo->expandirNodos() ){
            if( nodoFinal->compararCeldas(hijo) )
                return BFS::trayectoria( hijo );
            else if( !configuracionesExploradas.count( hijo->tablero ) )
                agenda.push_back( hijo );
        }
    }

    return BFS::trayectoria( new Rompecabezas( nullptr , ' ' , 0 ) );
}