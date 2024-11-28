import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent {
  // Arreglo con las rutas de las imágenes
  images = [
    { src: 'assets/mouse.png' },
    { src: 'assets/monitor.png' },
    { src: 'assets/images/imagen3.jpg' },
    { src: 'assets/images/imagen4.jpg' }
  ];

  // Índice actual del carrusel
  currentIndex = 0;

  // Transformación para mover el carrusel
  get carouselTransform() {
    return `translateX(-${this.currentIndex * 100}%)`;
  }

  // Función para mover las diapositivas
  moveSlide(direction: string) {
    if (direction === 'next') {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    } else {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    }
  }
}
