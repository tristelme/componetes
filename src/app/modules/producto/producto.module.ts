import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoRoutingModule } from './producto-routing.module';
import { CelularesComponent } from './pages/celulares/celulares.component';
import { ComputadorasComponent } from './pages/computadoras/computadoras.component';
import { RelojComponent } from './pages/reloj/reloj.component';
import { TelevicionesComponent } from './pages/televiciones/televiciones.component';
import { TablestComponent } from './pages/tablest/tablest.component';
import { CarruselComponent } from './carrusel/carrusel.component';

@NgModule({
  declarations: [
    CelularesComponent,
    ComputadorasComponent,
    TablestComponent,
    RelojComponent,
    TelevicionesComponent,
    CarruselComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ]
})
export class ProductoModule { }
