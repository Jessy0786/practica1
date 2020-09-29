import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService, private activeRoute: ActivatedRoute , private router: Router) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(dato =>{
      console.log(dato.ter);
      this.heroes = this.heroesService.buscadorHeroe(dato.ter);
    });
  }

  verHeroe(nombre: string){
    debugger;
    this.router.navigate(['/heroe', nombre]);
  }

}
