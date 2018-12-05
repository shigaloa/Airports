import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { AuthComponent } from "./auth.component";
import { AdminComponent } from "./admin.component";
import { TablaPedidosComponent } from "./tablePedidos.component";
//No tendrán sentido cuando se tomen los datos de Aviation Edge
import { TablaVuelosComponent } from "./tablaVuelos.component";
import { EditorVueloComponent } from "./editorVuelo.component";

import { AuthGuard } from "./auth.guard";

let routing = RouterModule.forChild([
    { path: "auth", component: AuthComponent },
    //{ path: "main", component: AdminComponent, canActivate: [AuthGuard] },
    {
        path: "main", component: AdminComponent, canActivate: [AuthGuard],
        children: [
        { path: "vuelos/:mode/:id", component: EditorVueloComponent },
        { path: "vuelos/:mode", component: EditorVueloComponent },
        { path: "vuelos", component: TablaVuelosComponent },
        { path: "pedidos", component: TablaPedidosComponent },
        { path: "**", redirectTo: "vuelos" }
        ]
    },
    { path: "**", redirectTo: "auth" }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing],
    declarations: [AuthComponent, AdminComponent, TablaPedidosComponent, TablaVuelosComponent, EditorVueloComponent],
    providers: [AuthGuard]
})
export class AdminModule { }