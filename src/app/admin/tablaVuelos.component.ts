//No tendrá sentido cuando se tomen los datos de Aviation Edge
import { Component } from "@angular/core";

import { Vuelo } from "../model/vuelo.model";
import { VueloRepositorio } from "../model/vuelo.repositorio";

@Component({
    templateUrl: "tablaVuelos.component.html"
})
export class TablaVuelosComponent { 

    constructor(private repositorio: VueloRepositorio) { }

    getVuelos(): Vuelo[] {
        return this.repositorio.getVuelos();
    }

    borrarVuelo(id: number) {
        this.repositorio.borrarVuelo(id);
    }
}