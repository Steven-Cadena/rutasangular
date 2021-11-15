import { Routes, RouterModule} from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

//NECESITAMOS IMPORTAR LOS COMPONENTES QUE VAYAMOS A NAVEGAR

import { HomeComponent } from './components/home/home.component';
import { MusicaComponent } from './components/musica/musica.component'; 
import { CineComponent } from './components/cine/cine.component';
import { TelevisionComponent } from './components/television/television.component';
import { Error404Component } from './components/error404/error404.component';
import { NumerodobleComponent } from './components/numerodoble/numerodoble.component';
import { CollatzComponent } from './components/collatz/collatz.component';
import { ListaproductosComponent } from './components/listaproductos/listaproductos.component';
//DEFINIMOS EL ARRAY DE RUTAS PARA LA NAVEGACION QUE ES DE TIPO ROUTER

const appRoutes: Routes = [
    //EN path  LA BARRA YA ESTA IMPLICITA, NO SE PONE
    {path:"",component: HomeComponent},
    {path:"home",component: HomeComponent},
    {path:"listaproductos", component: ListaproductosComponent},
    {path:"musica",component: MusicaComponent},
    {path:"cine",component: CineComponent},
    {path:"television",component: TelevisionComponent},
    {path:"numerodoble",component: NumerodobleComponent},
    {path:"numerodoble/:numero",component: NumerodobleComponent},
    {path:"collatz/:numero",component: CollatzComponent},
    {path:"**", component: Error404Component},
];

//DE ESTA CLASE DE EXPORTAN DOS ELEMENTOS 
//EL PRIMERO ES EL PROVEEDOR DE RUTAS , QUE ES UN ARRAY VACIO
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);