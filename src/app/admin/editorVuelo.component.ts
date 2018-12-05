//No tendrá sentido cuando se tomen los datos de Aviation Edge
import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";

import { Vuelo } from "../model/vuelo.model";
import { VueloRepositorio } from "../model/vuelo.repositorio";

@Component({
    templateUrl: "editorVuelo.component.html"
})
export class EditorVueloComponent {

    editando: boolean = false;
    vuelo: Vuelo = new Vuelo();
    
    constructor(private repositorio: VueloRepositorio, private router: Router, activeRoute: ActivatedRoute) {
        this.editando = activeRoute.snapshot.params["mode"] == "editar";
        if (this.editando) {
            console.log("parametro: ", activeRoute.snapshot.params["id"])
            Object.assign(this.vuelo, repositorio.getVuelo(activeRoute.snapshot.params["id"]));
        }
    }

    guardar(form: NgForm) {
        this.repositorio.guardarVuelo(this.vuelo);
        this.router.navigateByUrl("/admin/main/vuelos");
    }
}