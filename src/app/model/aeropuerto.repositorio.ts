import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Aeropuerto } from "./aeropuerto.model";

import { RestDataSource } from "./rest.datasource";

@Injectable()
export class AeropuertoRepositorio {

    private aeropuertos: Aeropuerto[] = [];
    private aeropuertos_cargados: boolean = false;

    constructor(private dataSource: RestDataSource) {
        dataSource.getAeropuertos().subscribe(data => {
            this.aeropuertos = data;
            console.log('dataaeropuerto',data)
        });
    }

    getAeropuerto(id: string): Aeropuerto {
        return this.aeropuertos.find(p => p.airportId == id);
    }

    /*getAeropuertos(): Aeropuerto[] {
        return this.aeropuertos;
    }*/
    
    getAeropuertos(): Aeropuerto[] {
        if (!this.aeropuertos_cargados) {
            this.cargarAeropuertos();
        }
        console.log('aqui ', this.aeropuertos)
        return this.aeropuertos;
        
    }

    cargarAeropuertos() {
        this.aeropuertos_cargados = true;
        this.dataSource.getAeropuertos()
            .subscribe(aeropuertos => {this.aeropuertos = aeropuertos; console.log('caca ', this.aeropuertos)});
    }
}