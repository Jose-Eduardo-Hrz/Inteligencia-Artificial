import * as Gestor from './Gestor.js'

export class Puzzle{

    constructor( nodoPadre , accion , profundidad ){
        this.nodoPadre = nodoPadre
        this.profundidad = profundidad
        this.objetivo = false
        this.hijos = []
        if( !nodoPadre ){
            this.celdas = Gestor.secuencia.reduce( ( res , sig ) => res | ( BigInt(sig) << BigInt(4*(sig-1)) ) , 0n )
            this.cero = 8
        }
        else{
            this.celdas = nodoPadre.celdas
            this.cero = nodoPadre.cero
            if(accion)
                this.mover(accion)
        }
    }

    mostrarPuzzle(){
        let tabla = []
        for( let i = 0 ; i < 9 ; i++ ){
            tabla.push( Gestor.obtenerCelda( i , this.celdas ) )
        }
        return tabla
    }

    mover( accion ){
        if(accion =='N')
            Gestor.mover_celda_arriba(this)
        if(accion =='E')
            Gestor.mover_celda_derecha(this)
        if(accion =='S')
            Gestor.mover_celda_abajo(this)
        if(accion =='O')
            Gestor.mover_celda_izquierda(this)
    }

    compararCeldas( otro ){
        return otro.celdas == this.celdas
    }

    expandir(){
        for( let movimiento of Gestor.movimientos_validos[ this.cero ]  ){
            let nodo = new Puzzle( this , movimiento , this.profundidad+1 )
            if( this.nodoPadre ){
                if( nodo.celdas != this.nodoPadre.celdas )
                    this.hijos.push( nodo )
            }else{
                this.hijos.push( nodo )
            }
        }
        return this.hijos
    }

    limpiarHijos(){
        this.hijos = []
    }

    modificarCeldas( tabla , posicionCero ){
        this.celdas = 0
        this.cero = posicionCero
        for( let i = tabla.length-1 ; i >= 0 ; i-- ){
            this.celdas = BigInt(this.celdas) << 4n | BigInt( tabla[i] )
        }
    }

}