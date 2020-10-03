import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  heroes: Heroe[] = [];
  resultadoBusqueda: string = '';
  resultadoBusquedaClass: string = '';

  constructor(private heroesService: HeroesService,
    private activeRoute: ActivatedRoute, private router: Router, private _location: Location) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(dato =>{
      //console.log(dato.ter);
      this.heroes = this.heroesService.buscadorHeroe(dato.ter);
      this.resultadoBusqueda = 'Se encontraron: ' + this.heroes.length + ' registros para : ' + dato.ter;
      this.resultadoBusquedaClass = 'alert alert-success';
      if (this.heroes.length <= 0){
        this.resultadoBusqueda = 'No se encotraron resultados para : ' + dato.ter;
        this.resultadoBusquedaClass = 'alert alert-danger';
      }
    });
  }
  verHeroe(nombre: string){
    this.router.navigate(['/heroe', nombre]);
  }

  backClicked() {
    this._location.back();
  }

}
