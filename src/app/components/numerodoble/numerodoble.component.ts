import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params } from '@angular/router';

@Component({
  selector: 'app-numerodoble',
  templateUrl: './numerodoble.component.html',
  styleUrls: ['./numerodoble.component.css']
})
export class NumerodobleComponent implements OnInit {
  public numero!: number;
  public doble!: number;

  //NECESITAMOS RECIBIR EL OBJETO ActivatedRouter  PARA RECUPERAR PARAMETROS
  //EN ANGULAR, LOS OBJETOS INYECTADOS SE DENOMINAN CON GUION BAJO
  constructor(private _activeRoute: ActivatedRoute){
  }

  ngOnInit(): void {
    //AQUI ES DONDE SE RECUPER LOS PARAMETROS 
    //SE UTILIZA UNA PROMESA LLAMADA subscribe
    //Y ESTA PROMESA TRAE Params  CON LOS PARAMETROS 
    //POR SU name
    this._activeRoute.params.subscribe((params: Params ) => {
      //PREGUNTAMOS SI EXISTE EL PARAMETRO numero  
      if ( params['numero'] != null){
        //ASIGNAMOS LA PROPIEDAD PARA LA PAGINA 
        //SIEMPRE VIENE COMO STRING
        this.numero = parseInt(params['numero']);
        this.doble = this.numero * 2;
      }
    });
  }
}
