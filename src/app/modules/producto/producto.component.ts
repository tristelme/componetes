import { Component } from '@angular/core';
import Swal from 'sweetalert2';  // Importa SweetAlert2

export interface Producto {
  idProducto: string;
  nombre: string;
  descripcion: string;
  imagen: string;
  alt: string;
  marca: string;
  precio: number;
}

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  productos: Producto[] = [
    {
      idProducto: "1",
      nombre: "Iphone",
      descripcion: "Liquidacion por cierre",
      imagen: "../assets/iphone14.png",
      alt: "celular apple",
      marca: "apple",
      precio: 999
    },
    {
      idProducto: "2",
      nombre: "Samsung Galaxy S21",
      descripcion: "Liquidacion por cierre",
      imagen: "../assets/samsungs21.png",
      alt: "celular samsung",
      marca: "Samsung",
      precio: 999
    },
    {
      idProducto: "3",
      nombre: "Google Pixel 6",
      descripcion: "Liquidacion por cierre",
      imagen: "../assets/GooglePixel6.png",
      alt: "celular google",
      marca: "Google",
      precio: 999
    },
    {
      idProducto: "4",
      nombre: "Samsung A23 5G",
      descripcion: "Liquidacion por cierre",
      imagen: "../assets/samsunga235g.jpg",
      alt: "celular samsung",
      marca: "Samsung",
      precio: 999
    }
  ];

  agregarAlCarrito() {
    // Muestra la alerta de "Carrito en mantenimiento"
    Swal.fire({
      icon: 'warning',
      title: 'Carrito en mantenimiento',
      text: 'El carrito está en mantenimiento. ¡Pronto estará disponible!',
      confirmButtonText: 'Aceptar'
    });
  }
}
