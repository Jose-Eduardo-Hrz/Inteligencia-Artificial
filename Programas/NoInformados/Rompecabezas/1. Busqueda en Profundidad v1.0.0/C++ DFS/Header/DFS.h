#ifndef DFS_H
#define DFS_H

#include "Rompecabezas.h"
#include "librerias.h"

class DFS{

    public:

        static std::vector<Rompecabezas*> trayectoria( Rompecabezas * nodoFinal );

        static std::vector<Rompecabezas*> Bucar( Rompecabezas * nodoInicial , Rompecabezas * nodoFinal );

        
};

#endif