#ifndef BFS_H
#define BFS_H

#include "Rompecabezas.h"
#include "librerias.h"

class BFS{

    public:

        static std::vector<Rompecabezas*> trayectoria( Rompecabezas * nodoFinal );

        static std::vector<Rompecabezas*> Bucar( Rompecabezas * nodoInicial , Rompecabezas * nodoFinal );

        
};

#endif