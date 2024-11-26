// src/app/modules/autenticacion/registro/registro.component.ts
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  username: string = ''; // Define la variable
  email: string = '';    // Define la variable
  password: string = ''; // Define la variable
  passwordError: boolean = false; // Variable para manejar el error de contraseña

  onSubmit(form: NgForm) {
    // Verifica si la contraseña excede los 8 caracteres
    if (this.password.length > 8) {
      this.passwordError = true;
      return; // Detiene el proceso de envío si hay un error
    }
    
    this.passwordError = false; // Restablece el error si la contraseña es válida
    // Procesar el registro (lógica adicional aquí)
    console.log('Formulario enviado', form.value);
  }
  hide = true;
}
