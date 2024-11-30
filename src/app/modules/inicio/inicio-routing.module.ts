import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
// RUTAS HIJAS DEL MÓDULO INICIO
const routes: Routes = [
  {
    path:"",component: InicioComponent
  },
  {
    path:"inicio",component: InicioComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }