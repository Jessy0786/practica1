import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroes: Heroe[] = [];
  heroe: any;
  nombre: string;

  constructor(private heroesService: HeroesService,
     private activatedRoute: ActivatedRoute,
     private router: Router,private _location: Location) {

  }

  ngOnInit(): void {
    console.log(this.heroes);
    this.activatedRoute.params.subscribe((params) => {
    if (params.nombre != null){
      debugger;
      this.nombre = params.nombre;
      this.heroe = this.heroesService.buscadorHeroe(this.nombre)[0];
    }
    });
    console.log('nombre : ' + this.nombre);
    console.log('heroe.img : ' + this.heroe.img);
    console.log('heroe.nombre : ' + this.heroe.nombre);
    console.log('heroe.bio : ' + this.heroe.bio);
    console.log('heroe.casa : ' + this.heroe.casa);
  }

  verTodosHeores(){this.router.navigate(['/heroes']);
  }
  backClicked() {
    this._location.back();
  }
}
