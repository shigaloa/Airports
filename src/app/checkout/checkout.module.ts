import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModelModule } from "../model/model.module";

import { CheckoutComponent } from "./checkout.component";

@NgModule({
    providers: [ModelModule],
    declarations: [CheckoutComponent],
    imports:[CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
})
export class CheckoutModule { }