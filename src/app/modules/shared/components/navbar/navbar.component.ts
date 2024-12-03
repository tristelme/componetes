import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/autentificacion/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';  // Importa SweetAlert2 para mostrar alertas bonitas

@Component({
  selector: 'app-navbar',  // Define el selector del componente
  templateUrl: './navbar.component.html',  // Ruta al archivo HTML
  styleUrls: ['./navbar.component.css']  // Ruta al archivo CSS
})
export class NavbarComponent {
  logueado = true;  // Booleana para manejo de registro y el inicio de sesión
  deslogueado = false;  // Booleana para manejo de cierre de sesión
  menuVisible: boolean = false;  // Controla la visibilidad del menú en modo responsivo

  constructor(
    public servicioAuth: AuthService,
    public servicioRutas: Router
  ) {}

  // Función para alternar el menú desplegable en dispositivos pequeños
  toggleMenu(): void {
    this.menuVisible = !this.menuVisible;  // Alterna el estado del menú
  }

  // Función para cambiar el fondo entre modo oscuro y claro
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
          ? '<i class="fa-solid fa-sun"></i>'  // Ícono para modo claro
          : '<i class="fa-solid fa-moon"></i>';  // Ícono para modo oscuro
      }
    }
  }

  // Función "ingresar" para simular el inicio de sesión
  ingresar() {
    this.logueado = false;
    this.deslogueado = true;
  }

  // Función "cerrarSesion" para cerrar sesión y navegar a la página principal
  cerrarSesion() {
    this.deslogueado = false;
    this.logueado = true;
    this.servicioAuth.cerrarSesion();  // Llama al servicio de cierre de sesión
    this.servicioRutas.navigate(['/']);  // Navega a la página principal
  }

  // Función para mostrar la alerta de "Carrito en mantenimiento" cuando se hace clic en el carrito
  mostrarAlertaCarrito() {
    Swal.fire({
      icon: 'info',  // Tipo de alerta
      title: 'Carrito en mantenimiento',  // Título de la alerta
      text: 'Lo sentimos, el carrito está en mantenimiento. ¡Vuelve pronto!',  // Mensaje de la alerta
      confirmButtonText: 'Aceptar'  // Texto del botón de confirmación
    });
  }

  // Función para alternar la visibilidad del menú móvil
  toggleMobileMenu() {
    this.menuVisible = !this.menuVisible;
  }
}
