import { NgModule } from '@angular/core';
// Importamos NgModule, que es un decorador necesario para definir módulos en Angular.

import { RouterModule, Routes } from '@angular/router';
// Importamos RouterModule, que nos permite configurar las rutas en Angular, y Routes, que es un tipo que nos permite definir las rutas.

import { RegistroComponent } from './registro/registro.component';
// Importamos el componente RegistroComponent, que será utilizado cuando el usuario acceda a la ruta de registro.

import { IniciosesionComponent } from './iniciosesion/iniciosesion.component';
// Importamos el componente IniciosesionComponent, que será utilizado cuando el usuario acceda a la ruta de inicio de sesión.

const routes: Routes = [
  {
    path:"registro", component: RegistroComponent
    // Definimos la ruta "registro", que cuando se acceda, cargará el componente RegistroComponent.
  },
  {
    path:"inicio-sesion", component: IniciosesionComponent
    // Definimos la ruta "inicio-sesion", que cuando se acceda, cargará el componente IniciosesionComponent.
  }
];
// Configuramos las rutas de la aplicación en un array llamado "routes". Cada objeto dentro del array tiene una "path" (la URL a la que se accederá) y un "component" (el componente que se renderizará cuando el usuario visite esa ruta).

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // Usamos RouterModule.forChild(routes) para configurar las rutas del módulo. "forChild" se usa cuando las rutas son cargadas de manera perezosa (lazy loading) en un módulo secundario.
  
  exports: [RouterModule]
  // Exportamos RouterModule para que las rutas definidas puedan ser accesibles en otros módulos que importen este módulo de enrutamiento.
})
export class AutentificacionRoutingModule { }
// Creamos un módulo de enrutamiento llamado AutentificacionRoutingModule, que configura y gestiona las rutas relacionadas con la autenticación (registro e inicio de sesión).
