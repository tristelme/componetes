import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/autentificacion/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  logueado = true; // Booleana para manejo de registro y el inicio de sesión
  deslogueado = false; // Booleana para manejo de cierre de sesión

  constructor(
    public servicioAuth: AuthService,
    public servicioRutas: Router
  ) {}

  // Función "ingresar" para invertir los valores
  ingresar() {
    this.logueado = false;
    this.deslogueado = true;
  }

  // Función "cerrarSesion" devuelve los valores originales
  cerrarSesion() {
    this.deslogueado = false;
    this.logueado = true;
    // Llamamos al método de "cerrar sesión" para limpiar el "token"
    this.servicioAuth.cerrarSesion();
    // Redirigimos a la raíz del sitio web
    this.servicioRutas.navigate(['/']);
  }

  // Función para cambiar el tema claro/oscuro
  cambiarFondo() {
    const toggle: HTMLInputElement | null = document.getElementById('toggle') as HTMLInputElement;
    const labelToggle: HTMLElement | null = document.getElementById('label_toggle') as HTMLElement;

    if (toggle) {
      const checked: boolean = toggle.checked;

      // Alternar la clase de modo oscuro en el cuerpo
      document.body.classList.toggle('dark', checked);

      // Actualizar el ícono según el estado del toggle
      if (labelToggle) {
        labelToggle.innerHTML = checked
          ? '<i class="fa-solid fa-sun"></i>' // Ícono para modo claro
          : '<i class="fa-solid fa-moon"></i>'; // Ícono para modo oscuro
      }
    }
  }
}
