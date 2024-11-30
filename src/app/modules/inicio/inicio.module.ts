import { NgModule } from '@angular/core';  // Importa el decorador NgModule de Angular para definir el módulo
import { CommonModule } from '@angular/common';  // Importa CommonModule, necesario para usar directivas comunes como ngIf y ngFor

import { InicioRoutingModule } from './inicio-routing.module';  // Importa el módulo de rutas específicas para este módulo (inicio-routing.module)

import { InicioComponent } from './pages/inicio/inicio.component';  // Importa el componente de la página de inicio
import { CardComponent } from '../card/card.component';  // Importa el componente de tarjetas de productos
import { CarruselComponent } from './pages/carrusel/carrusel.component';  // Importa el componente de carrusel de imágenes

// Importación de componentes de Angular Material
import { MatButtonModule } from '@angular/material/button';  // Módulo de botones de Material Design
import { MatCardModule } from '@angular/material/card';  // Módulo de tarjetas de Material Design

@NgModule({
  declarations: [
    // Declaramos los componentes que forman parte de este módulo
    InicioComponent,  // Componente de la página de inicio
    CardComponent,  // Componente que representa una tarjeta de producto
    CarruselComponent  // Componente de carrusel de imágenes
  ],
  imports: [
    // Aquí se importan otros módulos que el módulo actual necesita para funcionar
    CommonModule,  // Importa CommonModule, que permite usar directivas como *ngFor y *ngIf
    InicioRoutingModule,  // Importa el módulo de rutas para la página de inicio
    MatButtonModule,  // Módulo para utilizar los botones de Angular Material
    MatCardModule  // Módulo para usar las tarjetas de Angular Material
  ],
  exports: [
    // Los componentes y módulos que serán exportados para ser utilizados en otros módulos
    InicioComponent,  // Exporta el componente de inicio
    CardComponent,  // Exporta el componente de tarjeta
    MatButtonModule,  // Exporta el módulo de botones
    MatCardModule  // Exporta el módulo de tarjetas
  ]
})
export class InicioModule { }
