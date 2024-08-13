import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioRoutingModule } from './inicio-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CardComponent } from './component/card/card.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    InicioComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    InicioRoutingModule
  ],
  exports: [
    MatCardModule
  ]
})
export class InicioModule { }
