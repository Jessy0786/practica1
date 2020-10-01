import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  buscarHeroe(termino: string){
    termino = termino.trim();
    if (termino != null && termino.length){
      console.log('buscarHeroe: ' + termino);
      this.router.navigate(['/buscar', termino]);
    }
  }
}
