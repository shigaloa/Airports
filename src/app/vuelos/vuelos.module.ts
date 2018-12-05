import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { ModelModule } from "../model/model.module";
import { CarritoModule } from "../carrito/carrito.module";
import { VuelosComponent } from "./vuelos.component";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule, CarritoModule],
    declarations: [VuelosComponent],
    exports: [VuelosComponent]
})
export class VuelosModule { }