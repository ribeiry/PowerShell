import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://loiane.training.com';
  cursoAngular:boolean = true;
  urlImage:string = 'http://lorempixel.com/400/200/sports/';

  constructor() { }

  getValor(){return 1;}
  getCurtirCurso(){return true;}
  ngOnInit() {
  }

}
