import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CelularesComponent } from './pages/celulares/celulares.component';
import { ComputadorasComponent } from './pages/computadoras/computadoras.component';
import { RelojComponent } from './pages/reloj/reloj.component';
import { TablestComponent } from './pages/tablest/tablest.component';
import { TelevicionesComponent } from './pages/televiciones/televiciones.component';
const routes: Routes = [
  // TODAS LAS VISTAS DEL MÓDULO PRODUCTO
  {
    path:"Celulares",component:CelularesComponent
  },
  {
    path:"Computadoras",component:ComputadorasComponent
  },
  {
    path:"Relojes",component:RelojComponent
  },
  {
    path:"Tablets",component:TablestComponent
  },
  {
    path:"Televisores",component:TelevicionesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
