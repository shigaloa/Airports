import { Component } from "@angular/core";

import { Carrito } from "../model/carrito.model";

@Component({
    templateUrl: "detalleCarrito.component.html"
})
export class DetalleCarritoComponent { 

    constructor (public carrito: Carrito){}
}