import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';

import { VuelosModule } from "./vuelos/vuelos.module";
import { VuelosComponent } from "./vuelos/vuelos.component";

import { AeropuertosComponent } from "./aeropuertos/aeropuertos.component";
import { AeropuertosModule } from "./aeropuertos/aeropuertos.module";

import { CarritoModule } from "./carrito/carrito.module";
import { DetalleCarritoComponent } from "./carrito/detalleCarrito.component";


import { CheckoutModule } from "./checkout/checkout.module";
import { CheckoutComponent } from "./checkout/checkout.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    VuelosModule,
    AeropuertosModule,
    CarritoModule,
    CheckoutModule,
    RouterModule.forRoot([
      { path: "aeropuertos", component: AeropuertosComponent },
      { path: "vuelos", component: VuelosComponent },
      { path: "carrito", component: DetalleCarritoComponent },
      { path: "checkout", component: CheckoutComponent },
      {
        path: "admin",
        loadChildren: "./admin/admin.module#AdminModule",
      },
      //{ path: "**", redirectTo: "/vuelos" },
      { path: "**", redirectTo: "/aeropuertos" },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
