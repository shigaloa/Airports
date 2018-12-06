import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { HttpHeaders } from '@angular/common/http';

import { Vuelo } from "./vuelo.model";
import { Carrito } from "./carrito.model";
import { Pedido } from "./pedido.model";
import { Aeropuerto } from "./aeropuerto.model";

const PROTOCOL = "http";
const PORT = 3500;

@Injectable()
export class RestDataSource {

    baseUrl: string;
    auth_token: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }

    getVuelos(): Observable<Vuelo[]> {
        return this.http.get<Vuelo[]>(this.baseUrl + "vuelos");
    }

    guardarPedido(pedido: Pedido): Observable<Pedido> {
        return this.http.post<Pedido>(this.baseUrl + "pedidos", pedido);
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

    getPedidos(): Observable<Pedido[]> {
        return this.http.get<Pedido[]>(this.baseUrl + "pedidos", this.getOptions());
    }

    borrarPedido(id: number): Observable<Pedido> {
        return this.http.delete<Pedido>(`${this.baseUrl}pedidos/${id}`, this.getOptions());
    }

    actualizarPedido(pedido: Pedido): Observable<Pedido> {
        return this.http.put<Pedido>(`${this.baseUrl}pedidos/${pedido.id}`, this.getOptions());
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
        return this.http.get<Aeropuerto[]>("https://aviation-edge.com/v2/public/airportDatabase?key=e211fc-96c298&codeIso2Country=ES");
    }
}