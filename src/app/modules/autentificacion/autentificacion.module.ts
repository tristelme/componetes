import { NgModule } from '@angular/core';
// Importamos el decorador NgModule, que permite definir módulos en Angular.

import { CommonModule } from '@angular/common';
// Importamos CommonModule, que proporciona directivas y pipes comunes como *ngIf y *ngFor, necesarias en la mayoría de los componentes.

import { AutentificacionRoutingModule } from './autentificacion-routing.module';
// Importamos el módulo de enrutamiento para la autenticación que configuramos previamente (AutentificacionRoutingModule).

import { RegistroComponent } from './registro/registro.component';
// Importamos el componente RegistroComponent, que se encargará de la vista de registro.

import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
// Importamos el componente IniciosesionComponent, que se encargará de la vista de inicio de sesión.

import { MatIconModule } from '@angular/material/icon';
// Importamos MatIconModule para usar iconos de Material Design en nuestra aplicación.

import { MatInputModule } from '@angular/material/input';
// Importamos MatInputModule para usar el campo de entrada de Material Design.

import { MatFormFieldModule } from '@angular/material/form-field';
// Importamos MatFormFieldModule para envolver campos de entrada dentro de formularios de Material Design.

import { MatButtonModule } from '@angular/material/button';
// Importamos MatButtonModule para usar los botones de Material Design.

import { MatSelectModule } from '@angular/material/select';
// Importamos MatSelectModule para usar los campos de selección de Material Design.

import { FormsModule } from '@angular/forms';
// Importamos FormsModule para usar el enlace bidireccional de datos en formularios (ngModel).

@NgModule({
  declarations: [
    RegistroComponent,
    IniciosesionComponent
    // Declaramos los componentes RegistroComponent e IniciosesionComponent dentro de este módulo.
  ],
  imports: [
    CommonModule,
    AutentificacionRoutingModule,
    // Importamos CommonModule, que es necesario para las directivas de Angular como *ngIf y *ngFor.
    // Importamos AutentificacionRoutingModule, que contiene la configuración de las rutas hijas.
    
    // Importamos los módulos de Angular Material que nos permitirán usar sus componentes estilizados:
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    
    // Importamos FormsModule para poder usar el enlace bidireccional de datos en los formularios.
    FormsModule
  ],
  exports: [
    RegistroComponent,
    IniciosesionComponent,
    // Exportamos los componentes y módulos de Material Design y Angular para que puedan ser utilizados en otros módulos:
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule
  ]
})
export class AutentificacionModule { }
// Definimos el módulo AutentificacionModule, que agrupa los componentes relacionados con la autenticación.
// Este módulo declara los componentes, importa las dependencias necesarias y exporta los módulos para su uso en otros módulos.
