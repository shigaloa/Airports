/// <reference types="@types/googlemaps" />
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ViewChild } from '@angular/core';
//import * as google from '@types/googlemaps';
//import {} from "@types/googlemaps";
import {} from "googlemaps";

import { Aeropuerto } from "../model/aeropuerto.model";
//import { AeropuertoRepositorio } from "../model/aeropuerto.repositorio";

import { Carrito } from "../model/carrito.model";

import { RestDataSource } from "../model/rest.datasource";
declare var google: any;

@Component({
  selector: 'app-aeropuertos',
  templateUrl: './aeropuertos.component.html',
  styleUrls: ['./aeropuertos.component.css']
})
export class AeropuertosComponent implements OnInit {
 
  @ViewChild('aeromap') aeromapElement: any;
  //google: any;
  //map: google.maps.Map;
  map: any;
  center: {lat: number, lon: number};
  zoom: number;
  marcadorActual: any;

  public aeropuertos: Aeropuerto[] = [];
  public aeropuertosMostrados: Aeropuerto[];
  public aeropuertoSeleccionado = null;
  public aeropuertosPorPagina = 10;
  public paginaSeleccionada = 1;
  
  /*constructor(private repositorio: AeropuertoRepositorio) {
    this.map = null;
    this.aeropuertos = repositorio.getAeropuertos();
    console.log('encons: ', this.aeropuertos)
    //this.aeropuertos = this.getAeropuertos();
  }*/

  constructor(private dataSource: RestDataSource, private router: Router) {
    dataSource.getAeropuertos().subscribe(data => {
      this.aeropuertos = data;
      this.iniciar_mapa();
      this.mostrarAeropuertos();
    });
  }

  ngOnInit() {
    let minZoomLevel = 4;
    //let image = 'assets/imgs/nps_arrowhead.png';
    //Forma realizada en SeviciBike
    /*this.map = new google.maps.Map(document.getElementById('aeromap'), {
      zoom: minZoomLevel,
      center: new google.maps.LatLng(37.3828300, -5.9731700),
      mapTypeControl: false,
      streetViewControl: false,
      //
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });*/  
  }
    

  iniciar_mapa() {
    //Otra forma
    var mapProp = {
      center: new google.maps.LatLng(40.4167, -3.70325),
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.aeromapElement.nativeElement, mapProp);
    this.marcadorActual = new google.maps.Marker();
    for (let aeropuerto of this.aeropuertos) {
      let latitud: number = parseFloat(aeropuerto.latitudeAirport);
      let longitud: number = parseFloat(aeropuerto.longitudeAirport);
      let posicion: google.maps.LatLng = new google.maps.LatLng(latitud, longitud);
      let marcador: google.maps.Marker = new google.maps.Marker();
      marcador.setPosition(posicion);
      marcador.setMap(this.map);
      //marcador.setIcon(image);
      google.maps.event.addListener(marcador, 'click', () => {
        let selectedMarker: any = marcador;
        //en ionic
        //this.navCtrl.setRoot("DetalleEstacionPage", {
        //datoEstacion: selectedMarker.estacion
        //});
        this.router.navigateByUrl("/vuelos");
      });
      let infowindow = new google.maps.InfoWindow({
        content:aeropuerto.nameAirport
        });
      
      google.maps.event.addListener(marcador, 'mouseover', function() {
        //no pq en nginit no ve la función cambiarAeropuerto
        //this.cambiarAeropuerto(aeropuerto);
        infowindow.open(this.map,marcador);
        //
        //this.aeropuertoSeleccionado = aeropuerto;
        
        console.log('enover: ', this.aeropuertoSeleccionado)
      });
      google.maps.event.addListener(marcador, 'mouseout', function() {
        infowindow.close();
      });
    }
  }

  cambiarAeropuerto (aeropuerto: Aeropuerto){
    //no pq añade un marcador en esa posición, pero no estamos sobre el mapa
    //se podría hacer que cambiara el dom añadiendo un campo al modelo de aeropuerto
    //e iniciandolo cuando se inicia el mapa?
    /*this.marcadorActual.setPosition(aeropuerto.latitudeAirport, aeropuerto.longitudeAirport);
    this.marcadorActual.setMap(this.map);
    google.maps.event.addListener(this.marcadorActual, 'mouseover', function() {
      this.aeropuertoSeleccionado = aeropuerto;
      console.log('enoveraerop: ', this.aeropuertoSeleccionado)
    });*/
    this.aeropuertoSeleccionado = aeropuerto;
  }

  mostrarAeropuertos (){
    let indicePagina = (this.paginaSeleccionada - 1) * this.aeropuertosPorPagina;
    this.aeropuertosMostrados = this.aeropuertos
            .slice(indicePagina, indicePagina + this.aeropuertosPorPagina);
  }

  cambiarPagina(pagina: number) {
    this.paginaSeleccionada = pagina;
    this.mostrarAeropuertos();
  }

  get numerosPagina(): number[] {
    return Array(Math.ceil(this.aeropuertos.length / this.aeropuertosPorPagina))
      .fill(0).map((x, i) => i + 1);
  }

  irVuelos (aeropuerto: Aeropuerto){
    this.router.navigateByUrl("/vuelos");
  }
}
