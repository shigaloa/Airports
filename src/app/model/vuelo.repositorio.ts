import { Injectable } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

import { Vuelo } from "./vuelo.model";
//import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class VueloRepositorio {

    private vuelos: Vuelo[] = [];
    private aerolineas: string[] = [];
    private aeropuertoSeleccionado: string = null;

    //constructor(private dataSource: StaticDataSource) {
    constructor(private dataSource: RestDataSource, private route: ActivatedRoute) {
        this.route.params.subscribe( params => 
            {this.aeropuertoSeleccionado = params['aeropuerto'];
             //dataSource.getVuelos(this.aeropuertoSeleccionado).subscribe(data => {
             console.log('aeropu seelec: ', this.aeropuertoSeleccionado)
             dataSource.getVuelos("SVQ").subscribe(data => {    
                this.vuelos = data;
                this.aerolineas = data.map(p => p.airline.name)
                    .filter((c, index, array) => array.indexOf(c) == index).sort();
            })}
        );
        /*dataSource.getVuelos(this.aeropuertoSeleccionado).subscribe(data => {
            this.vuelos = data;
            this.aerolineas = data.map(p => p.airline.name)
                .filter((c, index, array) => array.indexOf(c) == index).sort();
        })*/
    }

    getVuelos(aerolinea: string = null): Vuelo[] {
        return this.vuelos
            .filter(p => aerolinea == null || aerolinea == p.airline.name);
    }

    /*getVuelos(aerolinea: string = null, aeropuerto: string = null): any{ //Vuelo[] {
        console.log('entro getvuelos')
        this.dataSource.getVuelos(aeropuerto).subscribe(data => {
            this.vuelos = data;
            this.aerolineas = data.map(p => p.airline.name)
                .filter((c, index, array) => array.indexOf(c) == index).sort();
            return this.vuelos
                .filter(p => aerolinea == null || aerolinea == p.airline.name);
        });
        return this.vuelos
            .filter(p => aerolinea == null || aerolinea == p.airline.name);
        this.aeropuertoSeleccionado = aeropuerto;
        return this.vuelos;
}*/

    getVuelo(id: string): Vuelo {
        return this.vuelos.find(p => p.flight.number == id);
    }
    
    getAerolineas(): string[] {
        return this.aerolineas;
    }

    //Para utilizar en administración
    //No tendrán sentido cuando se tomen los datos de Aviation Edge
    guardarVuelo(vuelo: Vuelo) {
        if (vuelo.id == null || vuelo.id == 0) {
            this.dataSource.guardarVuelo(vuelo)
                .subscribe(p => this.vuelos.push(p));
        } else {
            this.dataSource.actualizarVuelo(vuelo)
                .subscribe(p => {
                    this.vuelos.splice(this.vuelos.
                        findIndex(p => p.id == vuelo.id), 1, vuelo);
                });
        }
    }

    borrarVuelo(id: number) {
        this.dataSource.borrarVuelo(id).subscribe(p => {
            this.vuelos.splice(this.vuelos.
                findIndex(p => p.id == id), 1);
        })
    }
}