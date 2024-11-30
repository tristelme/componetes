import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent {
  // Usamos @Input() para que este componente pueda recibir una lista de imágenes desde su componente padre
  @Input() items: string[] = []; // Lista de imágenes que serán mostradas en el carrusel
  currentIndex: number = 0; // Índice de la imagen actualmente visible en el carrusel

  // Función para ir al siguiente slide
  nextSlide(): void {
    // Actualiza el índice para mostrar la siguiente imagen
    // Si llega al final, vuelve al inicio (circular)
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  // Función para ir al slide anterior
  prevSlide(): void {
    // Actualiza el índice para mostrar la imagen anterior
    // Si está en el primer slide, vuelve al último (circular)
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
  }
}
