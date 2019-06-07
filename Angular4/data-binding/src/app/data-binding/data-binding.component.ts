import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url:string = 'http://loiane.com';
  cursoAngular:boolean = true;
  urlImagem:string = 'http://lorempixel.com/400/200/nature/'
  valorAtual:string = '';
  valorSalvo:string = '';
  isMouseOver:boolean = false;
  nome:string = 'abc';
  pessoa:any = {
    nome : 'Augusto',
    idade : 15
  }

  botaoClicado(){
    alert('Botão Clicado');
  }
  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value + '|';
      
  }
  getCurtirCurso(){
    return true;
  }

  salvarValor(valor){
    this.valorSalvo = valor;

  }

  onMouseOverOut(){
    this.isMouseOver= !this.isMouseOver;

  }

  getValor(){
    return 2;
  }
  constructor() { }

  ngOnInit() {
  }

}
