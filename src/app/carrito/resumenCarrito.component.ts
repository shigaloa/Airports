import { Component } from "@angular/core";
import { Carrito } from "../model/carrito.model";

@Component({
    selector: "resumen-carrito",
    templateUrl: "resumenCarrito.component.html"
})
export class ResumenCarritoComponent {
    constructor(public carrito: Carrito) { }
}