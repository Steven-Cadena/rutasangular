import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Params,Router } from '@angular/router';

@Component({
  selector: 'app-collatz',
  templateUrl: './collatz.component.html',
  styleUrls: ['./collatz.component.css']
})
export class CollatzComponent implements OnInit {
  public numero!: number;
  public numresult! : Array<number>;

  constructor( private _activeRoute: ActivatedRoute) {
    this.numresult=[];
   }

  verificarCollatz(){
    this._activeRoute.params.subscribe((params: Params ) => {
        this.numresult=[];
        this.numero = parseInt(params['numero']);
        this.numresult.push(this.numero);
        while(this.numero != 1 ){
          if (this.numero % 2 == 0){//par
            this.numero = this.numero / 2;
            this.numresult.push(this.numero);
            console.log(this.numresult);
          }else{//impar
            this.numero = this.numero * 3 + 1;
            this.numresult.push(this.numero);
          }
        }
    });
  }

  ngOnInit(): void {
    this.verificarCollatz();
  }

}
