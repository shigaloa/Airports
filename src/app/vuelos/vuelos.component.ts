import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { Vuelo } from "../model/vuelo.model";
import { VueloRepositorio } from "../model/vuelo.repositorio";
import { Carrito } from "../model/carrito.model";


@Component({
    selector: "vuelos",
    templateUrl: "vuelos.component.html"
})
export class VuelosComponent {

    public aerolineaSeleccionada = null;
    public vuelosPorPagina = 4;
    public paginaSeleccionada = 1;

    constructor(private repositorio: VueloRepositorio,
                private carrito: Carrito,
                private router: Router) { }

    get vuelos(): Vuelo[] {
        //return this.repositorio.getVuelos();
        //return this.repositorio.getVuelos(this.aerolineaSeleccionada);
        let indicePagina = (this.paginaSeleccionada - 1) * this.vuelosPorPagina
        return this.repositorio.getVuelos(this.aerolineaSeleccionada)
            .slice(indicePagina, indicePagina + this.vuelosPorPagina);
    }

    get aerolineas(): string[] {
        return this.repositorio.getAerolineas();
    }

    cambiarAerolinea(aerolinea?: string) {
        this.cambiarPagina(1);
        this.aerolineaSeleccionada = aerolinea;
    }

    cambiarPagina(pagina: number) {
        this.paginaSeleccionada = pagina;
    }

    cambiarSizePagina(size: number) {
        this.vuelosPorPagina = Number(size);
        this.cambiarPagina(1);
    }

    get numerosPagina(): number[] {
        return Array(Math.ceil(this.repositorio
            .getVuelos(this.aerolineaSeleccionada).length / this.vuelosPorPagina))
            .fill(0).map((x, i) => i + 1);
    }

    addVueloCarrito(vuelo: Vuelo) {
        this.carrito.addLinea(vuelo);
        this.router.navigateByUrl("/carrito");
    }
}