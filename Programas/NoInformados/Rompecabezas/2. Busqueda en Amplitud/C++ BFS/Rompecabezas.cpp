#include "./Header/Rompecabezas.h"
#include "./Header/Gestor.h"

Rompecabezas::Rompecabezas(Rompecabezas *nodopadre, char accion, int profundidad){
    this->nodopadre = nodopadre;
    this->profundidad = profundidad;
    if (nodopadre == nullptr){
        this->tablero = 0;
        Gestor g;
        for (int valor : g.elementos){
            this->tablero = this->tablero | ((unsigned long long) valor << (unsigned long long)(4 * (valor-1)));
        }
        this->cero = 8;
    }
    else{
        this->tablero = nodopadre->tablero;
        this->cero = nodopadre->cero;
        if (accion != ' '){
            mover(accion);
        }
    }
}

void Rompecabezas::mostrarRompecabezas(){
    for (int i = 0; i < 9; i++){
        std::cout << Gestor::obtenerCelda( i , this->tablero ) << " ";
        if( i % 3 == 2 )
            std::cout << "\n";
    }
    std::cout << "\n";
}

void Rompecabezas::mover(char accion){
    if(accion == 'N') 
        Gestor::mover_celda_arriba( this );
    if(accion == 'E') 
        Gestor::mover_celda_derecha( this );
    if(accion == 'S') 
        Gestor::mover_celda_abajo( this );
    if(accion == 'O') 
        Gestor::mover_celda_izquierda( this );
}

bool Rompecabezas::compararCeldas(Rompecabezas *rompecabezas){
    return this->tablero == rompecabezas->tablero;
}

void Rompecabezas::modificarCeldas(int celdas[]){
    this->tablero = (unsigned long long) 0;
    for( int i = 8 ; i >= 0 ; i-- ){
        this->tablero = this->tablero << 4 | celdas[i];
        if( celdas[i] == 0 )
            this->cero = i;
    }
}

std::vector<Rompecabezas*> Rompecabezas::expandirNodos(){
    std::vector<Rompecabezas*> nodos;
    Gestor g;
    for( char movimiento : g.movimientos_validos[this->cero] ){
        Rompecabezas * hijo = new Rompecabezas( this , movimiento , this->profundidad+1 );
        if( this->nodopadre != nullptr ){
            if( hijo->tablero != this->nodopadre->tablero )
                nodos.push_back( hijo );
        }else{
            nodos.push_back( hijo );
        }
    }
    return nodos;
}