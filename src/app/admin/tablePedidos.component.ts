import { Component } from "@angular/core";

import { Pedido } from "../model/pedido.model";
import { PedidoRepositorio } from "../model/pedido.repositorio";

@Component({
    templateUrl: "tablaPedidos.component.html"
})
export class TablaPedidosComponent {

    incluirEnviados = false;

    constructor(private repositorio: PedidoRepositorio) { }

    getPedidos(): Pedido[] {
        console.log('enpedido: ', this.repositorio.getPedidos())
        return this.repositorio.getPedidos()
            .filter(o => this.incluirEnviados || !o.enviado);
    }

    marcarEnviado(pedido: Pedido) {
        pedido.enviado = true;
        this.repositorio.actualizarPedido(pedido);
    }

    borrar(id: number) {
        this.repositorio.borrarPedido(id);
    }
}