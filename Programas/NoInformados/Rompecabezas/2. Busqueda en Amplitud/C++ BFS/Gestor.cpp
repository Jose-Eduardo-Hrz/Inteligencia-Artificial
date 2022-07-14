#include "./Header/Gestor.h"

unsigned long long Gestor::filtro_celda( int posicionCelda ){
    return (unsigned long long) 15 << (unsigned long long) (4 * posicionCelda);
}

unsigned long long Gestor::obtenerCelda(int posicionCelda, unsigned long long tablero){
    return (tablero & Gestor::filtro_celda(posicionCelda)) >> (unsigned long long) (4 * posicionCelda);
}

void Gestor::mover_celda_izquierda( Rompecabezas * rompecabezas ){
    if( !(rompecabezas->cero % 3 == 2) ){
        rompecabezas->cero += 1;
        unsigned long long comparador = Gestor::filtro_celda( rompecabezas->cero );
        rompecabezas->tablero = 
            ((rompecabezas->tablero & comparador) >> (unsigned long long) 4) |
            (rompecabezas->tablero & ~(comparador));
    }
}

void Gestor::mover_celda_derecha( Rompecabezas * rompecabezas ){
    if( !(rompecabezas->cero % 3 == 0) ){
        rompecabezas->cero -= 1;
        unsigned long long comparador = Gestor::filtro_celda( rompecabezas->cero );
        rompecabezas->tablero = 
            ((rompecabezas->tablero & comparador) << (unsigned long long) 4) |
            (rompecabezas->tablero & ~(comparador));
    }
}

void Gestor::mover_celda_arriba( Rompecabezas * rompecabezas ){
    if( !(rompecabezas->cero <= 2) ){
        rompecabezas->cero -= 3;
        unsigned long long comparador = Gestor::filtro_celda( rompecabezas->cero );
        rompecabezas->tablero = 
            ((rompecabezas->tablero & comparador) << (unsigned long long) 12) |
            (rompecabezas->tablero & ~(comparador));
    }
}

void Gestor::mover_celda_abajo( Rompecabezas * rompecabezas ){
    if( !(rompecabezas->cero >= 6) ){
        rompecabezas->cero += 3;
        unsigned long long comparador = Gestor::filtro_celda( rompecabezas->cero );
        rompecabezas->tablero = 
            ((rompecabezas->tablero & comparador) >> (unsigned long long) 12) |
            (rompecabezas->tablero & ~(comparador));
    }
}