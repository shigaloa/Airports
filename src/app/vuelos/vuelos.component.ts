import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ActivatedRoute } from '@angular/router';

import { Vuelo } from "../model/vuelo.model";
//import { VueloRepositorio } from "../model/vuelo.repositorio";
import { Carrito } from "../model/carrito.model";
import { RestDataSource } from "../model/rest.datasource";

@Component({
    selector: "vuelos",
    templateUrl: "vuelos.component.html"
})
export class VuelosComponent {

    private vuelos_totales: Vuelo[] = [];
    private aerolineas1: string[] = [];
    public aerolineaSeleccionada = null;
    public aeropuertoSeleccionado = null;
    public vuelosPorPagina = 5;
    public paginaSeleccionada = 1;

    /*constructor(private repositorio: VueloRepositorio,
                private carrito: Carrito,
                private router: Router,
                private route: ActivatedRoute) {
        this.route.params.subscribe( params => this.aeropuertoSeleccionado = params['aeropuerto'] );
    }*/

    constructor(private dataSource: RestDataSource,
        private carrito: Carrito,
                private router: Router, 
                private route: ActivatedRoute) {
                    this.route.params.subscribe( params => 
                        {this.aeropuertoSeleccionado = params['aeropuerto'];
                         dataSource.getVuelos(this.aeropuertoSeleccionado).subscribe(data => {
                            this.vuelos_totales = data;
                            this.aerolineas1 = data.map(p => p.airline.name)
                                .filter((c, index, array) => array.indexOf(c) == index).sort();
                        })}
                    );
      }

    /*get vuelos(): Vuelo[] {
        //return this.repositorio.getVuelos();
        //return this.repositorio.getVuelos(this.aerolineaSeleccionada);
        let indicePagina = (this.paginaSeleccionada - 1) * this.vuelosPorPagina
        return this.repositorio.getVuelos(this.aerolineaSeleccionada)
            .slice(indicePagina, indicePagina + this.vuelosPorPagina);
    }

    get aerolineas(): string[] {
        return this.repositorio.getAerolineas();
    }*/

    get vuelos(): Vuelo[] {
        let indicePagina = (this.paginaSeleccionada - 1) * this.vuelosPorPagina
        return this.vuelos_totales
            .filter(p => this.aerolineaSeleccionada == null || this.aerolineaSeleccionada == p.airline.name)
            .slice(indicePagina, indicePagina + this.vuelosPorPagina);
    }

    get aerolineas(): string[] {
        return this.aerolineas1;
    }

    cambiarAerolinea(aerolinea?: string) {
        this.cambiarPagina(1);
        this.vuelosPorPagina = 5;
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
        return Array(Math.ceil(
            this.vuelos_totales
                .filter(p => this.aerolineaSeleccionada == null || this.aerolineaSeleccionada == p.airline.name)
                .length / this.vuelosPorPagina))
        .fill(0).map((x, i) => i + 1);
    }
        
    addVueloCarrito(vuelo: Vuelo) {
        this.carrito.addLinea(vuelo);
        this.router.navigateByUrl("/carrito");
    }
}