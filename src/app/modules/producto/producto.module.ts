import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoRoutingModule } from './producto-routing.module';
import { CelularesComponent } from './pages/celulares/celulares.component';
import { ComputadorasComponent } from './pages/computadoras/computadoras.component';
import { RelojComponent } from './pages/reloj/reloj.component';
import { TelevicionesComponent } from './pages/televiciones/televiciones.component';
import { TablestComponent } from './pages/tablest/tablest.component';
import { CardCelularesComponent } from './components/card-celulares/card-celulares.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { CardComputadorasComponent } from './components/card-computadoras/card-computadoras.component';
@NgModule({
  declarations: [
    CelularesComponent,
    ComputadorasComponent,
    TablestComponent,
    RelojComponent,
    TelevicionesComponent,
    CardCelularesComponent,
    CardComputadorasComponent,
    CarruselComponent

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
    CardCelularesComponent,
    CardComputadorasComponent,
  ]

})
export class ProductoModule {}
