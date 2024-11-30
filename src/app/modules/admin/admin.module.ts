// Importa el decorador NgModule para definir un módulo en Angular
import { NgModule } from '@angular/core';
// Importa el módulo CommonModule, que contiene funcionalidades comunes para aplicaciones Angular
import { CommonModule } from '@angular/common';

// Importa el archivo de rutas para configurar las rutas de este módulo
import { AdminRoutingModule } from './admin-routing.module';
// Importa el componente principal de la vista del administrador
import { AdminComponent } from './pages/admin/admin.component';
// Importa el componente de la tabla, donde se gestionarán los productos
import { TableComponent } from './components/table/table.component';

// Importa los módulos de formularios y formularios reactivos de Angular
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Importa el módulo de íconos de Angular Material, que permite utilizar íconos en la aplicación
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  // Declarations: Se especifican los componentes, directivas y pipes que pertenecen a este módulo
  declarations: [
    AdminComponent, // Declara el componente AdminComponent
    TableComponent // Declara el componente TableComponent
  ],
  // Imports: Se importan los módulos necesarios para este módulo
  imports: [
    CommonModule, // Importa CommonModule, necesario para usar directivas comunes como ngIf, ngFor
    AdminRoutingModule, // Importa el módulo de rutas específico para este módulo
    FormsModule, // Importa FormsModule para trabajar con formularios basados en template-driven
    ReactiveFormsModule, // Importa ReactiveFormsModule para trabajar con formularios reactivos
    MatIconModule // Importa MatIconModule para usar íconos de Angular Material
  ],
  // Exports: Se especifican los componentes, directivas y módulos que este módulo pone a disposición de otros módulos
  exports:[
    AdminComponent, // Exporta AdminComponent para que pueda ser usado en otros módulos
    TableComponent, // Exporta TableComponent para que pueda ser usado en otros módulos
    FormsModule, // Exporta FormsModule para formularios basados en template-driven
    ReactiveFormsModule, // Exporta ReactiveFormsModule para formularios reactivos
    MatIconModule // Exporta MatIconModule para usar íconos de Angular Material en otros módulos
  ]
})
// Define el módulo 'AdminModule' que agrupa los componentes y servicios relacionados con la administración
export class AdminModule { }
