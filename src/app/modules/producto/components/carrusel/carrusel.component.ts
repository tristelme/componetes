import { Component } from '@angular/core';
import { Input } from '@angular/core';
@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent {
  @Input() items: string[] = []; // Lista de imágenes
  currentIndex: number = 0;

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
  }
}
