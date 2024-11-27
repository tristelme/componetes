import { Component, OnInit } from '@angular/core';
// IMPORTAMOS INTERFAZ
import { celulares } from 'src/app/models/celulares';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  // PROPIEDAD PÚBLICA (TIPO: ARRAY)
  public info: celulares[];

  // Constructor
  constructor() {
    this.info = [
      {
        id: "", 
        titulo: "999", 
        descripcion: "", 
        imagen: "/assets/iphone15.png", 
        alt: "", 
        marca: "",
      },
      {
        id: "", 
        titulo: "", 
        descripcion: "", 
        imagen: "", 
        alt: "", 
        marca: "",
      },
      {
        id: "", 
        titulo: "", 
        descripcion: "", 
        imagen: "", 
        alt: "", 
        marca: "",
      },
      {
        id: "", 
        titulo: "", 
        descripcion: "", 
        imagen: "/assets/iphone 15.png", 
        alt: "", 
        marca: "",
      },
      {
        id: "", 
        titulo: "", 
        descripcion: "", 
        imagen: "/assets/iphone.png", 
        alt: "", 
        marca: "",
      },
      {
        id: "", 
        titulo: "", 
        descripcion: "", 
        imagen: "", 
        alt: "", 
        marca: "",
      },
    ];
  }

  ngOnInit(): void {
    // Aquí puedes realizar inicializaciones adicionales si es necesario
  }

  // Función para mostrar la alerta cuando se haga clic en "Agregar al carrito"
  mostrarAlerta() {
    Swal.fire({
      icon: 'info',
      title: 'Carrito en mantenimiento',
      text: 'Lo sentimos, el carrito está en mantenimiento. ¡Vuelve pronto!',
      confirmButtonText: 'Aceptar'
    });
  }
}
