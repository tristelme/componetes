// Importación de módulos necesarios
import { NgModule } from '@angular/core';  // Importa el decorador NgModule que define el módulo en Angular
import { CommonModule } from '@angular/common';  // Importa el módulo CommonModule para usar directivas comunes como ngIf y ngFor

// COMPONENTES LOCALES
import { NavbarComponent } from './components/navbar/navbar.component';  // Importa el componente NavbarComponent
import { FooterComponent } from './components/footer/footer.component';  // Importa el componente FooterComponent

// COMPONENTES DE MATERIAL
import { MatIconModule } from '@angular/material/icon';  // Importa el módulo MatIconModule para iconos de Material
import { MatButtonModule } from '@angular/material/button';  // Importa el módulo MatButtonModule para botones de Material
import { MatToolbarModule } from '@angular/material/toolbar';  // Importa el módulo MatToolbarModule para barras de herramientas de Material
import { MatMenuModule } from '@angular/material/menu';  // Importa el módulo MatMenuModule para menús de Material

// ACCEDEMOS A TODAS LAS RUTAS DEL PROYECTO
import { AppRoutingModule } from 'src/app/app-routing.module';  // Importa el módulo de rutas del proyecto para navegar entre vistas

// Decorador NgModule para definir un módulo en Angular
@NgModule({
  declarations: [
    // Declaración de los componentes que este módulo va a usar
    NavbarComponent,  // Declara el componente NavbarComponent
    FooterComponent,  // Declara el componente FooterComponent
  ],
  imports: [
    // Importación de otros módulos que este módulo necesita para funcionar
    CommonModule,  // Importa CommonModule para poder usar directivas estándar
    AppRoutingModule,  // Importa AppRoutingModule para manejar la navegación de rutas
    MatIconModule,  // Importa MatIconModule para usar iconos de Material
    MatButtonModule,  // Importa MatButtonModule para usar botones de Material
    MatToolbarModule,  // Importa MatToolbarModule para usar barras de herramientas de Material
    MatMenuModule,  // Importa MatMenuModule para usar menús de Material
  ],
  exports: [
    // Exporta los componentes y módulos para que puedan ser utilizados en otros módulos
    NavbarComponent,  // Exporta NavbarComponent para que otros módulos lo puedan usar
    FooterComponent,  // Exporta FooterComponent para que otros módulos lo puedan usar
    MatIconModule,  // Exporta MatIconModule para que otros módulos lo puedan usar
    MatButtonModule,  // Exporta MatButtonModule para que otros módulos lo puedan usar
    MatToolbarModule,  // Exporta MatToolbarModule para que otros módulos lo puedan usar
    MatMenuModule,  // Exporta MatMenuModule para que otros módulos lo puedan usar
  ]
})
export class SharedModule { }  // Define el módulo SharedModule que contiene componentes y módulos compartidos
