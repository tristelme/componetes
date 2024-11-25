import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';
import { ProductoComponent } from './modules/producto/producto.component'; // Importar ProductoComponent
import { AcercaDeComponent } from './modules/acerca-de/acerca-de.component';
import { ContactoComponent } from './modules/contacto/contacto.component';
const routes: Routes = [
  {
    path: '', component: InicioComponent
  },
  {
    path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  },
  {
    path:"",loadChildren:()=>import('./modules/autenticacion/autenticacion.module').then(m=>m.AutenticacionModule)
  },
  { path: 'producto', component: ProductoComponent }, // Ruta para ProductoComponent
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Ruta por defecto
  { path: 'about', component: AcercaDeComponent },
  { path: 'contact', component: ContactoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
