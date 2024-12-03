import { Component } from '@angular/core';
import Swal from 'sweetalert2';  // Importa SweetAlert2

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  enviarFormulario() {
    // Muestra la ventana emergente con SweetAlert2
    Swal.fire({
      icon: 'success',
      title: '¡Solicitud enviada!',
      text: 'Nos pondremos en contacto contigo pronto.',
      confirmButtonText: 'Aceptar'
    });

    // Aquí podrías agregar el código para enviar los datos del formulario si es necesario
    console.log("Formulario enviado!");
  }
}
