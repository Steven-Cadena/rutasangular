import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menucollatz',
  templateUrl: './menucollatz.component.html',
  styleUrls: ['./menucollatz.component.css']
})
export class MenucollatzComponent implements OnInit {

  public numeros!: Array<number>;
  public numAleatorio!: number;

  constructor() { 
    this.numeros = []; //new Array<number>();
  }

  ngOnInit(): void {
    for(var i = 1; i<=10; i++){
      this.numAleatorio =  Math.floor(Math.random() * (10 - 1)) + 1;
      this.numeros.push(this.numAleatorio);
    }
  }

}
