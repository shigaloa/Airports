import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { VueloRepositorio } from "./vuelo.repositorio";
import { AeropuertoRepositorio } from "./aeropuerto.repositorio";
import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from "./rest.datasource";
import { AuthService } from "./auth.service";
import { Pedido } from "./pedido.model";
import { PedidoRepositorio } from "./pedido.repositorio";
import { Carrito } from "./carrito.model";
import { from } from "rxjs";


@NgModule({
    imports: [HttpClientModule],
    providers: [VueloRepositorio, { provide: StaticDataSource, useClass: RestDataSource },
                Carrito, Pedido, PedidoRepositorio, RestDataSource, AuthService, AeropuertoRepositorio]
})
export class ModelModule { }