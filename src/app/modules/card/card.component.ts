import { Component, OnInit } from '@angular/core';  // Importa las clases necesarias de Angular
import Swal from 'sweetalert2';  // Importa SweetAlert2 para mostrar alertas bonitas
import { celulares } from 'src/app/models/celulares';  // Importa el modelo de celulares (probablemente define la estructura de los objetos celulares)

@Component({
  selector: 'app-card',  // Define el selector del componente, para usarlo en plantillas HTML
  templateUrl: './card.component.html',  // Define la ruta al archivo de plantilla HTML de este componente
  styleUrls: ['./card.component.css']  // Define la ruta al archivo de estilos CSS de este componente
})
export class CardComponent implements OnInit {
  // Declara una propiedad 'info' que es un arreglo de objetos 'celulares' que contiene información sobre diferentes modelos de teléfonos
  public info: celulares[] = [
    {
      id: "1",  // ID único para el celular
      titulo: "Apple iPhone 15 (256 GB) - Verde",  // Título del producto
      descripcion: "Apple iPhone 15 (256 GB) - Verde",  // Descripción corta del producto
      imagen: "assets/iphone 15.png",  // Ruta de la imagen que representa al celular
      alt: "Apple iPhone 15 (256 GB) - Verde",  // Texto alternativo para la imagen
      marca: "Apple",  // Marca del celular
    },
    {
      id: "2",  // ID único para otro celular
      titulo: "Apple iPhone 11 (64 GB) - Blanco",  // Título del producto
      descripcion: "Apple iPhone 11 (64 GB) - Blanco",  // Descripción corta del producto
      imagen: "/assets/iphone11.png",  // Ruta de la imagen que representa al celular
      alt: "Apple iPhone 11 (64 GB) - Blanco",  // Texto alternativo para la imagen
      marca: "Samsung",  // Marca del celular
    },
    {
      id: "2",  // ID único para otro celular
      titulo: "Apple iPhone 12 (64 GB)",  // Título del producto
      descripcion: "Apple iPhone 12 (64 GB) - verde",  // Descripción corta del producto
      imagen: "/assets/iphone12.png",  // Ruta de la imagen que representa al celular
      alt: "Apple iPhone 12 (64 GB)",  // Texto alternativo para la imagen
      marca: "Samsung",  // Marca del celular
    },
    {
      id: "2",  // ID único para otro celular
      titulo: "Apple iPhone 15 (256 GB) - Negro",  // Título del producto
      descripcion: "Apple iPhone 15 (256 GB) - Negro",  // Descripción corta del producto
      imagen: "/assets/iphone15black.png",  // Ruta de la imagen que representa al celular
      alt: "Samsung Galaxy S24",  // Texto alternativo para la imagen
      marca: "Samsung",  // Marca del celular
    },
  ];

  constructor() {}  // Constructor vacío, no realiza ninguna acción al inicializar el componente

  ngOnInit(): void {}  // ngOnInit vacío, no realiza ninguna acción al inicializar el componente

  // Función para mostrar una alerta cuando el usuario intenta agregar al carrito
  mostrarAlerta() {
    Swal.fire({
      icon: 'info',  // Tipo de la alerta: "info"
      title: 'Carrito en mantenimiento',  // Título de la alerta
      text: 'Lo sentimos, el carrito está en mantenimiento. ¡Vuelve pronto!',  // Mensaje de la alerta
      confirmButtonText: 'Aceptar'  // Texto del botón de confirmación
    });
  }
}
