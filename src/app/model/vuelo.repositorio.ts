import { Injectable } from "@angular/core";

import { Vuelo } from "./vuelo.model";
//import { StaticDataSource } from "./static.datasource";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class VueloRepositorio {

    private vuelos: Vuelo[] = [];
    private aerolineas: string[] = [];

    //constructor(private dataSource: StaticDataSource) {
    constructor(private dataSource: RestDataSource) {
        dataSource.getVuelos().subscribe(data => {
            this.vuelos = data;
            console.log('datavuelo',data)
            this.aerolineas = data.map(p => p.airline.name)
                .filter((c, index, array) => array.indexOf(c) == index).sort();
        });
    }

    getVuelos(aerolinea: string = null): Vuelo[] {
        return this.vuelos
            .filter(p => aerolinea == null || aerolinea == p.airline.name);
    }

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