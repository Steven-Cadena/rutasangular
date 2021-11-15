import { Component, OnInit } from '@angular/core';
import { Coche } from 'src/app/models/coche';

@Component({
  selector: 'app-concesionario',
  templateUrl: './concesionario.component.html',
  styleUrls: ['./concesionario.component.css']
})
export class ConcesionarioComponent implements OnInit {
  public coches : Array<Coche>;
  constructor() { 
    this.coches = [
      new Coche("Ford","Mustang",0 ,320, 30,false),
      new Coche("Kia","Picanto",0 ,150, 5,false),
      new Coche("Lamborguini","Diablo",0 ,450, 60,false),
    ]
  }

  ngOnInit(): void {
  }

}
