import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { ModelModule } from "../model/model.module";

import { ResumenCarritoComponent } from "./resumenCarrito.component";
import { DetalleCarritoComponent } from "./detalleCarrito.component";

@NgModule({
    providers: [ModelModule],
    declarations: [ResumenCarritoComponent, DetalleCarritoComponent],
    imports:[CommonModule, RouterModule],
    exports: [ResumenCarritoComponent, DetalleCarritoComponent]
})
export class CarritoModule { }