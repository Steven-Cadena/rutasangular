export class Producto {
    public nombre: string;
    public imagen: string;
    public precio: number;

    //CREAMOS UN CONSTRUCTOR PARA RECIBIR PARAMETROS 
    constructor(nombre: string, imagen:string, precio:number){
        this.nombre = nombre;
        this.imagen = imagen;
        this.precio = precio;
    }
}
