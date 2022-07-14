import * as Gestor from './Gestor.js'

export class Rompecabezas{

    constructor( nodoPadre=null , accion=null , profundidad=0 ){
        this.nodoPadre = nodoPadre
        this.profundidad = profundidad
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

    mostrarRompecabezas(){
        let tabla = ""
        for( let i = 0 ; i < 9 ; i++ ){
            tabla += Gestor.obtenerCelda( i , this.celdas ) + " "
            if( i % 3 == 2 )
                tabla += "\n" 
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
        let nodosHijos = []
        for( let movimiento of Gestor.movimientos_validos[ this.cero ]  ){
            let nodo = new Rompecabezas( this , movimiento , this.profundidad+1 )
            if( this.nodoPadre ){
                if( nodo.celdas != this.nodoPadre.celdas )
                    nodosHijos.push( nodo )
            }else{
                nodosHijos.push( nodo )
            }
        }
        return nodosHijos
    }

    revolverCeldas( numeroMovimientos ){
        for (let i = 0; i < numeroMovimientos; i++) {
            let movimientos_validos_cero = Gestor.movimientos_validos[this.cero]
            let posicion_movimientos = Math.floor(Math.random()*movimientos_validos_cero.length)
            this.mover(movimientos_validos_cero[posicion_movimientos]);
          }
    }

}