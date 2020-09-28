import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  heroes: Heroe[] = [];
  heroe: any;
  id: number;

  constructor(private heroesService: HeroesService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
    console.log(this.heroes);
    this.activatedRoute.params.subscribe((params) => {
    this.id = params.id;
    //this.heroe = this.heroesService.getHeroeDetalle(this.id);
    this.heroe = this.heroes[this.id];
    });
    console.log('id : ' + this.id);
    console.log('heroe.img : ' + this.heroe.img);
    console.log('heroe.nombre : ' + this.heroe.nombre);
    console.log('heroe.bio : ' + this.heroe.bio);
    console.log('heroe.casa : ' + this.heroe.casa);
  }

  verTodosHeores(){    
    this.router.navigate(['/heroes']);
  }
}
