#ifndef GESTOR_H
#define GESTOR_H

#include "Rompecabezas.h"
#include "librerias.h"

class Gestor{
        
    public:

        const int elementos[9] = { 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 };

        const char acciones[4] = { 'N' , 'E' , 'S' , 'O' };

        static unsigned long long filtro_celda( int posicionCelda );

        static unsigned long long obtenerCelda(int posicionCelda, unsigned long long tablero);

        std::map< int , std::vector<char> > movimientos_validos = {
            { 0 , { 'S' , 'O' } },
            { 1 , { 'E' , 'S' , 'O' } },
            { 2 , { 'E' , 'S' } },
            { 3 , { 'N' , 'S' , 'O' } },
            { 4 , { 'N' , 'E' , 'S' , 'O' } },
            { 5 , { 'N' , 'E' , 'S' } },
            { 6 , { 'N' , 'O' } },
            { 7 , { 'N' , 'O' , 'E' } },
            { 8 , { 'N' , 'E' } },
        };

        static void mover_celda_izquierda( Rompecabezas * rompecabezas );

        static void mover_celda_derecha( Rompecabezas * rompecabezas );

        static void mover_celda_arriba( Rompecabezas * rompecabezas );

        static void mover_celda_abajo( Rompecabezas * rompecabezas );

};

#endif