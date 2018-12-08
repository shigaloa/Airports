import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Pedido } from "./pedido.model";
//import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class PedidoRepositorio {

    private pedidos: Pedido[] = [];
    private loaded: boolean = false;

    //constructor(private dataSource: StaticDataSource) { }
    constructor(private dataSource: RestDataSource) { }
    //constructor(private dataSource: PedidosDataSource) { }

    //Sin autenticación
    /*getPedidos(): Pedido[] {
        return this.pedidos;
    }
    
    guardarPedido(pedido: Pedido): Observable<Pedido> {
        return this.dataSource.guardarPedido(pedido);
    }*/

    cargarPedidos() {
        this.loaded = true;
        this.dataSource.getPedidos()
            .subscribe(pedidos => this.pedidos = pedidos);
    }

    getPedidos(): Pedido[] {
        if (!this.loaded) {
            this.cargarPedidos();
        }
        return this.pedidos;
    }

    guardarPedido(pedido: Pedido): Observable<Pedido[]> {
        return this.dataSource.guardarPedido(pedido);
    }

    /*actualizarPedido(pedido: Pedido) {
        this.dataSource.actualizarPedido(pedido).subscribe(pedido => {
            this.pedidos.splice(this.pedidos.
                findIndex(o => o.id == pedido.id), 1, pedido);
        });
    }*/

    actualizarPedido(pedido: Pedido): Observable<Pedido[]> {
        return this.dataSource.actualizarPedido(pedido);
    }

    /*borrarPedido(id: number) {
        this.dataSource.borrarPedido(id).subscribe(pedido => {
            this.pedidos.splice(this.pedidos.findIndex(o => id == o.id));
        });
    }*/

    borrarPedido(id: number): Observable<Pedido[]> {
        return this.dataSource.borrarPedido(id);
    }
}