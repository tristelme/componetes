import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';  // Importa SweetAlert2 para mostrar alertas bonitas
import { celulares } from 'src/app/models/celulares';  // Importa el modelo de celulares

@Component({
  selector: 'app-card',  // Define el selector del componente
  templateUrl: './card.component.html',  // Ruta al archivo HTML de este componente
  styleUrls: ['./card.component.css']  // Ruta al archivo CSS de este componente
})
export class CardComponent implements OnInit {
  public info: celulares[] = [
    {
      id: "1",
      titulo: "Apple iPhone 15 (256 GB) - Verde",
      descripcion: "Apple iPhone 15 (256 GB) - Verde",
      imagen: "assets/iphone 15.png",
      alt: "Apple iPhone 15 (256 GB) - Verde",
      marca: "Apple",
    },
    {
      id: "2",
      titulo: "Apple iPhone 11 (64 GB) - Blanco",
      descripcion: "Apple iPhone 11 (64 GB) - Blanco",
      imagen: "/assets/iphone11.png",
      alt: "Apple iPhone 11 (64 GB) - Blanco",
      marca: "Samsung",
    },
    {
      id: "3",
      titulo: "Apple iPhone 12 (64 GB)",
      descripcion: "Apple iPhone 12 (64 GB) - verde",
      imagen: "/assets/iphone12.png",
      alt: "Apple iPhone 12 (64 GB)",
      marca: "Samsung",
    },
    {
      id: "4",
      titulo: "Apple iPhone 15 (256 GB) - Negro",
      descripcion: "Apple iPhone 15 (256 GB) - Negro",
      imagen: "/assets/iphone15black.png",
      alt: "Samsung Galaxy S24",
      marca: "Samsung",
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  // Función para mostrar una alerta cuando el usuario intenta agregar al carrito
  mostrarAlerta() {
    Swal.fire({
      icon: 'info',
      title: 'Carrito en mantenimiento',
      text: 'Lo sentimos, el carrito está en mantenimiento. ¡Vuelve pronto!',
      confirmButtonText: 'Aceptar'
    });
  }

  // Función para mostrar una alerta de "Producto sin stock" cuando el usuario presiona "Comprar ahora"
  comprarAhora() {
    Swal.fire({
      icon: 'error',  // Cambiado a 'error' porque el producto no está disponible
      title: 'Producto sin stock',  // Título de la alerta
      text: 'Lo sentimos, este producto está fuera de stock. ¡Vuelve a intentar más tarde!',  // Mensaje de la alerta
      confirmButtonText: 'Aceptar'  // Texto del botón de confirmación
    });
  }
}
