import { Component, OnInit, Input ,Output, EventEmitter} from '@angular/core';
//agregamos input para recuperar el car de <app-coche> que nos lo devuelve el padre concesionario
import { Coche } from 'src/app/models/coche'; //importante para poder trabjar con el modelo de coche


@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css']
})
export class CocheComponent implements OnInit {
  @Input() car!: Coche; //aquí recibimos el objeto de coche del padre
  public mensaje!: string;
  @Output() seleccionarCoche:  EventEmitter<any> = new EventEmitter(); //esto es para recibir del padre la funcion 
  
  //METODO PARA SELECCIONAR UN ELEMENTO Y LLAMAR AL PADRE
  seleccionarCocheHijo(): void{
    //LLAMAMOS LA METODO DEL PADRE 
    // dentro de emit solo podemos mandar un argumento 
    this.seleccionarCoche.emit(this.car);
  }
  constructor( ) {
    //CUANDO RECIBIMOS OBJETOS INPUT NO PODEMOS UTILIZARLOS EN EL CONSTRUCTOR 
    //HAY QUE HACERLO EN EL ngOnInit
   }
   ngOnInit(): void {
     this.comprobarEstado();
  }

  //METODO PARA COMPROBAR EL ESTADO Y LANZAR UN MENSAJE 
  comprobarEstado(): boolean{
    if (this.car.estado == false){
      this.mensaje = "El coche está apagado.";
      this.car.velocidad = 0;
      return false;
    }else{
      this.mensaje = "El coche está encendido.";
      return true;
    }
  }

  encenderCoche(): void{
    this.car.estado = !this.car.estado;
    this.comprobarEstado();
  }

  acelerarCoche(): void{
    if(this.comprobarEstado() == false){
      alert("El cohe no está encendido");
    }else{
      this.car.velocidad = this.car.velocidad + this.car.aceleracion;
      if(this.car.velocidad > this.car.velocidadMaxima){
        this.car.velocidad = this.car.velocidadMaxima;
      }
    }
  }

}
