import { Injectable } from "@angular/core";
import { Carrito } from "./carrito.model";

@Injectable()
export class Pedido {
    public id: number;
    public nombre: string;
    public direccion: string;
    public ciudad: string;
    public provincia: string;
    public zip: string;
    public estado: string;
    public enviado: boolean = false;

    constructor(public carrito: Carrito) { }

    limpiar() {
        this.id = null;
        this.nombre = this.direccion = this.ciudad = null;
        this.provincia = this.zip = this.estado = null;
        this.enviado = false;
        this.carrito.limpiar();
    }
}