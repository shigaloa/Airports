import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
//import {from} from 'rxjs';
//import { from } from 'rxjs/observable';
//import { from } from 'rxjs/observable/from';

import { HttpHeaders } from '@angular/common/http';

import { Vuelo } from "./vuelo.model";
import { Carrito } from "./carrito.model";
import { Pedido } from "./pedido.model";
import { Aeropuerto } from "./aeropuerto.model";

//const PROTOCOL = "http";
const PORT = 3500;

const PROTOCOL = "https";
const API_KEY = "e211fc-96c298";

@Injectable()
export class RestDataSource {

    baseUrl: string;
    auth_token: string;

    aviation_edge_db: string;

    //Versión almacenamiento cliente
    pedidos: Pedido[] = [];

    constructor(private http: HttpClient) {
        //this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
        this.baseUrl = `${PROTOCOL}://aviation-edge.com/v2/public/`;
    }

    /*getVuelos(): Observable<Vuelo[]> {
        return this.http.get<Vuelo[]>(this.baseUrl + "vuelos");
    }*/

    getVuelos(aeropuerto: string): Observable<Vuelo[]> {
        this.aviation_edge_db = 'timetable';
        return this.http.get<Vuelo[]>
            (`${this.baseUrl}${this.aviation_edge_db}?key=${API_KEY}&iataCode=${aeropuerto}`);
    }

    authenticate(user: string, pass: string): Observable<boolean> {
        return this.http.post<any>(this.baseUrl + "login", {
            name: user, password: pass
        }).pipe(map(response => {
            this.auth_token = response.success ? response.token : null;
            return response.success;
        }));
    }

    guardarVuelo(vuelo: Vuelo): Observable<Vuelo> {
        return this.http.post<Vuelo>(this.baseUrl + "vuelos", vuelo, this.getOptions());
    }

    actualizarVuelo(vuelo): Observable<Vuelo> {
        return this.http.put<Vuelo>(`${this.baseUrl}vuelos/${vuelo.id}`, vuelo, this.getOptions());
    }

    borrarVuelo(id: number): Observable<Vuelo> {
        return this.http.delete<Vuelo>(`${this.baseUrl}vuelos/${id}`, this.getOptions());
    }

    //Con Json server en local
    /*getPedidos(): Observable<Pedido[]> {
        return this.http.get<Pedido[]>(this.baseUrl + "pedidos", this.getOptions());
    }

    borrarPedido(id: number): Observable<Pedido> {
        return this.http.delete<Pedido>(`${this.baseUrl}pedidos/${id}`, this.getOptions());
    }

    guardarPedido(pedido: Pedido): Observable<Pedido> {
        return this.http.post<Pedido>(this.baseUrl + "pedidos", pedido);
    }

    actualizarPedido(pedido: Pedido): Observable<Pedido> {
        return this.http.put<Pedido>(`${this.baseUrl}pedidos/${pedido.id}`, this.getOptions());
    }*/

    //Con array en almacenamiento cliente
    getPedidos(): Observable<Pedido[]> {
        return of (this.pedidos);
    }

    borrarPedido(id: number): Observable<Pedido[]> {
        this.pedidos.splice(id, 1);
        return of (this.pedidos);
    }

    guardarPedido(pedido: Pedido): Observable<Pedido[]> {
        this.pedidos.push(pedido);
        return of (this.pedidos);
    }

    actualizarPedido(pedido: Pedido): Observable<Pedido[]> {
        this.pedidos.splice(pedido.id, 1, pedido);
        return of (this.pedidos);
    }

    private getOptions() {
        return {
            headers: new HttpHeaders({
                "Authorization": `Bearer<${this.auth_token}>`
            })
        }
    }

    getAeropuertos(): Observable<Aeropuerto[]> {
        //return this.http.get<Aeropuerto[]>(this.baseUrl + "aeropuertos");
        this.aviation_edge_db = 'airportDatabase';
        return this.http.get<Aeropuerto[]>
            (`${this.baseUrl}${this.aviation_edge_db}?key=${API_KEY}&codeIso2Country=ES`);
    }
}