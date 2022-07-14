#ifndef ROMPECABEZAS_H
#define ROMPECABEZAS_H

#include "librerias.h"

class Rompecabezas{
public:

    Rompecabezas * nodopadre;
    int profundidad;
    unsigned long long tablero;
    int cero;

    Rompecabezas(Rompecabezas * nodopadre, char accion, int profundidad);

    void mostrarRompecabezas();

    void mover(char accion);

    bool compararCeldas(Rompecabezas * rompecabezas);

    void revolverCeldas(int numeroMovimientos);

    std::vector<Rompecabezas*> expandirNodos();
    
};

#endif