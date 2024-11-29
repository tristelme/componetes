import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoRoutingModule } from './producto-routing.module';
import { CelularesComponent } from './pages/celulares/celulares.component';
import { ComputadorasComponent } from './pages/computadoras/computadoras.component';
import { RelojComponent } from './pages/reloj/reloj.component';
import { TelevicionesComponent } from './pages/televiciones/televiciones.component';
import { TablestComponent } from './pages/tablest/tablest.component';
import { CarruselComponent } from './producs/carrusel/carrusel.component';
import { CardCelularesComponent } from './producs/card-celulares/card-celulares.component';
import { CardComputadorasComponent } from './producs/card-computadoras/card-computadoras.component';
@NgModule({
  declarations: [
    CelularesComponent,
    ComputadorasComponent,
    TablestComponent,
    RelojComponent,
    TelevicionesComponent,
    CarruselComponent,
    CardCelularesComponent,
    CardComputadorasComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ],
  exports: [
    CelularesComponent,
    ComputadorasComponent,
    TablestComponent,
    RelojComponent,
    TelevicionesComponent,
    CarruselComponent,
  ]

})
export class ProductoModule {
  
 }
