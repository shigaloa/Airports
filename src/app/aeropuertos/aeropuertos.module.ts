import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { ModelModule } from "../model/model.module";
import { AeropuertosComponent } from './aeropuertos.component';
import { CarritoModule } from "../carrito/carrito.module";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ModelModule,
    RouterModule,
    CarritoModule
  ],
  declarations: [AeropuertosComponent],
  exports: [AeropuertosComponent]
})
export class AeropuertosModule { }
