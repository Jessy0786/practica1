import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  isMarvel: boolean = true;

  constructor(private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('this.rutaActiva.snapshot.params.marvelOrDC : ' + this.rutaActiva.snapshot.params.marvelOrDC);
    if (this.rutaActiva.snapshot.params.marvelOrDC === 'DCcomics'){
      this.isMarvel = false;
    }
  }

}
