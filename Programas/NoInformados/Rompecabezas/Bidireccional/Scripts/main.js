import { mostrarCeldas , celda_cero } from './DatosIds.js'
import { Puzzle } from './Puzzle.js'
import { Bidireccional , obtenerNumeroNodos , obtenerNumeroRamas } from './Bidireccional.js'
import { recorrerArbol , recorrerTrayactoria } from './Diagrama.js'

document.getElementById('btnIniciarBusqueda').onclick = () => {

    document.getElementById('ContenedorRuta').innerHTML = ""
    document.getElementById('nodoPrincipalFronteraAdelante').innerHTML = ""
    document.getElementById('nodoPrincipalFronteraAtras').innerHTML = ""

    let nodoPadre = new Puzzle( null , null , 0 )
    nodoPadre.modificarCeldas( mostrarCeldas() , celda_cero )

    let nodoObjetivo = new Puzzle( null , null , 0 )
    nodoObjetivo.objetivo = true

    let { nodoFronteraAdelante , nodoFronteraAtras } = Bidireccional.buscar( nodoPadre , nodoObjetivo )

    recorrerArbol( nodoPadre , document.getElementById('nodoPrincipalFronteraAdelante') )

    recorrerArbol( nodoObjetivo , document.getElementById('nodoPrincipalFronteraAtras') )

    let numero_ramas_frontera_Adelante = obtenerNumeroRamas( nodoPadre )
    let numero_nodos_frontera_Adelante = obtenerNumeroNodos( nodoPadre )

    let numero_ramas_frontera_Atras = obtenerNumeroRamas( nodoObjetivo )
    let numero_nodos_frontera_Atras = obtenerNumeroNodos( nodoObjetivo )

    document.getElementById('Numero_Nodos_Frontera_Adelante').innerText = numero_nodos_frontera_Adelante + " nodos"
    document.getElementById('Numero_Profundidad_Frontera_Adelante').innerText = nodoFronteraAdelante.profundidad
    document.getElementById('Numero_Ramas_Frontera_Adelante').innerText = numero_ramas_frontera_Adelante + " ramas"

    document.getElementById('Numero_Nodos_Frontera_Atras').innerText = numero_nodos_frontera_Atras + " nodos"
    document.getElementById('Numero_Profundidad_Frontera_Atras').innerText = nodoFronteraAtras.profundidad
    document.getElementById('Numero_Ramas_Frontera_Atras').innerText = numero_ramas_frontera_Atras + " ramas"

    document.getElementById('Numero_Nodos_Total').innerText = (numero_nodos_frontera_Adelante+numero_nodos_frontera_Atras-1) + " nodos"
    document.getElementById('Numero_Profundidad_Total').innerText = nodoFronteraAtras.profundidad + nodoFronteraAdelante.profundidad
    document.getElementById('Numero_Ramas_Total').innerText = (numero_ramas_frontera_Adelante+numero_ramas_frontera_Atras-1) + " ramas"

    recorrerTrayactoria( nodoFronteraAdelante , nodoFronteraAtras , document.getElementById('ContenedorRuta') )

}