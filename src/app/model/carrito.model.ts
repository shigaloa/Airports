import { Injectable } from "@angular/core";
import { Vuelo } from "./vuelo.model";

const COSTE_VUELO = 100;

@Injectable()
export class Carrito {
    
    public lineas: LineaCarrito[] = [];
    public contadorItems: number = 0;
    public importeTotal: number = 0;

    addLinea(vuelo: Vuelo, cantidad: number = 1) {
        let linea = this.lineas.find(linea => linea.vuelo.flight.number == vuelo.flight.number);
        if (linea != undefined) {
            linea.cantidad += cantidad;
        } else {
            this.lineas.push(new LineaCarrito(vuelo, cantidad));
        }
        this.recalcular();
    }

    actualizarCantidad(vuelo: Vuelo, cantidad: number) {
        let linea = this.lineas.find(linea => linea.vuelo.flight.number == vuelo.flight.number);
        if (linea != undefined) {
            linea.cantidad = Number(cantidad);
        }
        this.recalcular();
    }

    quitarLinea(id: string) {
        let index = this.lineas.findIndex(linea => linea.vuelo.flight.number == id);
        this.lineas.splice(index, 1);
        this.recalcular();
    }

    limpiar() {
        this.lineas = [];
        this.contadorItems = 0;
        this.importeTotal = 0;
    }

    private recalcular() {
        this.contadorItems = 0;
        this.importeTotal = 0;
        this.lineas.forEach(l => {
            this.contadorItems += l.cantidad;
            //this.importeTotal += (l.cantidad * l.vuelo.price);
            this.importeTotal += (l.cantidad * COSTE_VUELO);
        })
    }
} 

export class LineaCarrito {

    constructor(public vuelo: Vuelo,
        public cantidad: number,
        public coste_vuelo: number = COSTE_VUELO) { }

    get lineaTotal() {
        //return this.cantidad * this.vuelo.price;
        return this.cantidad * COSTE_VUELO;
    }
}
