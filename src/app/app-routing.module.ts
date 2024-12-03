import { NgModule } from '@angular/core';
import { RouterModule,} from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';
import { Routes } from '@angular/router';
import { ContactoComponent } from './modules/contacto/contacto.component';
import { AcercaDeComponent } from './modules/acerca-de/acerca-de.component';
import { ServiciosComponent } from './modules/servicios/servicios.component';

const routes: Routes = [
  // RUTA INICIAL / PRINCIPAL AL COMPONENTE
  {
    path:"",component: InicioComponent
  },
  { 
    path: "contacto", component: ContactoComponent 
  },
  { 
    path: "acerca-de", component: AcercaDeComponent
  },
  { 
    path: 'servicios', component: ServiciosComponent
  },
  // CARGA PEREZOSA -> RUTA AL MÓDULO INICIO
  // loadChildren: Indica que será ruta hija del módulo raíz
  // ()=>: Función flecha que importará la dirección del módulo
  // .then: Promesa que nos devolerá un valor resuelto o rechazado
  {
    path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  },
  {
    path:"",loadChildren:()=>import('./modules/producto/producto.module').then(m=>m.ProductoModule)
  },
  {
    path:"",loadChildren:()=>import('./modules/autentificacion/autentificacion.module').then(m=>m.AutentificacionModule)
  },
  {
    path:"",loadChildren:()=>import('./modules/admin/admin.module').then(m=>m.AdminModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }