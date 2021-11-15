export class Coche{
    constructor(        
        public marca:string,
        public modelo : string,
        public velocidad: number,
        public velocidadMaxima: number,
        public aceleracion: number,
        public estado: boolean
    ){}
}