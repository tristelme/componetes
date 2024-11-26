import { Component } from '@angular/core';
import { Usuario } from 'app/models/usuario';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  // input de la contraseña para ver los cáracteres o no
  hide = true;
  // IMPORTAR LA INTERFAZ DE USUARIO -> INICIALIZAR
  usuarios: Usuario = {
    uid: '', // -> inicializamos con comillas simples porque es tipo STRING
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: ''
  }
  // CREAMOS COLECCIÓN DE USUARIOS, TIPO 'USUARIO' PARA ARRAYS
  coleccionUsuarios: Usuario[] = [];
  // FUNCIÓN PARA EL REGISTRO DE NUEVOS USUARIOS
  registrar(){
    // constante credenciales va a resguardar la información que ingrese el usuario
    const credenciales = {
      uid: this.usuarios.uid, // definimos al atributo de la interfaz con una variable local
      nombre: this.usuarios.nombre,
      apellido: this.usuarios.apellido,
      email: this.usuarios.email,
      rol: this.usuarios.rol,
      password: this.usuarios.password
    }
    // Enviamos la nueva información como un NUEVO OBJETO a la colección de usuarios
    this.coleccionUsuarios.push(credenciales)
    // Mostramos credenciales por consola
    console.log(credenciales);
    console.log(this.coleccionUsuarios);
  }
}