import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

import { PedidoRepositorio } from "../model/pedido.repositorio";
import { Pedido } from "../model/pedido.model";

@Component({
    templateUrl: "checkout.component.html",
    styleUrls: ["checkout.component.css"]
})
export class CheckoutComponent {

    pedidoEnviado: boolean = false;
    submitted: boolean = false;

    constructor(public repositorio: PedidoRepositorio,
                public pedido: Pedido) { }

    submitOrder(form: NgForm) {
        this.submitted = true;
        if (form.valid) {
            this.repositorio.guardarPedido(this.pedido).subscribe(pedido => {
                this.pedido.limpiar();
                this.pedidoEnviado = true;
                this.submitted = false;
            });
        }
    }
}