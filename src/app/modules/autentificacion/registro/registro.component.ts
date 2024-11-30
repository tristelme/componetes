import { Component } from '@angular/core';
// Importamos la interfaz Usuario para definir la estructura de datos de un usuario.
import { Usuario } from 'src/app/models/usuario';
// Importamos el servicio de autenticación para gestionar el registro y login de usuarios.
import { AuthService } from '../services/auth.service';
// Importamos el servicio de Firestore para interactuar con la base de datos de Firebase.
import { FirestoreService } from '../../shared/service/firestore.service';
// Importamos Router de Angular para navegar entre vistas.
import { Router } from '@angular/router';
// Importamos CryptoJS para encriptar la contraseña de los usuarios.
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-registro',  // Nombre del componente.
  templateUrl: './registro.component.html',  // Ruta de la vista HTML asociada.
  styleUrls: ['./registro.component.css']  // Ruta de los estilos CSS asociados.
})
export class RegistroComponent {
  // Variable para controlar la visibilidad de la contraseña en el formulario.
  hide = true;

  // Inicializamos el objeto "usuarios" con la interfaz "Usuario".
  usuarios: Usuario = {
    uid: '',        // ID único del usuario (será asignado posteriormente).
    nombre: '',     // Nombre del usuario.
    apellido: '',   // Apellido del usuario.
    email: '',      // Email del usuario.
    rol: '',        // Rol del usuario (por ejemplo, 'admin', 'user').
    password: ''    // Contraseña del usuario.
  }

  // Array para almacenar usuarios de manera local (no se está usando actualmente).
  coleccionUsuarios: Usuario[] = [];

  constructor(
    // Inyectamos los servicios necesarios en el constructor.
    public servicioAuth: AuthService,
    public servicioFirestore: FirestoreService,
    public servicioRutas: Router
  ){}

  // Función principal para registrar un nuevo usuario.
  async registrar(){
    // Creamos un objeto de credenciales con el email y la contraseña.
    const credenciales = {
      email: this.usuarios.email,        // Email ingresado por el usuario.
      password: this.usuarios.password   // Contraseña ingresada por el usuario.
    }

    // Intentamos registrar al usuario utilizando el servicio de autenticación.
    const res = await this.servicioAuth.registrar(credenciales.email, credenciales.password)
    .then(res => {
      // Si el registro es exitoso, mostramos un mensaje y redirigimos al inicio.
      alert("¡Se pudo registrar con éxito! :)");
      this.servicioRutas.navigate(['/inicio']);  // Redireccionamos a la vista 'inicio'.
    })
    .catch(error => {
      // Si ocurre un error, mostramos un mensaje con el error.
      alert("Hubo un error al registrar un nuevo usuario :( \n" + error);
    })

    // Obtenemos el UID del usuario registrado.
    const uid = await this.servicioAuth.obtenerUid();
    // Asignamos el UID al objeto "usuarios".
    this.usuarios.uid = uid;

    // Encriptamos la contraseña usando SHA-256.
    this.usuarios.password = CryptoJS.SHA256(this.usuarios.password).toString();

    // Llamamos a la función para guardar al usuario en Firestore.
    this.guardarUsuario();

    // Limpiamos los campos del formulario después de registrarse.
    this.limpiarInputs();
  }

  // Función para guardar los datos del usuario en Firestore.
  async guardarUsuario(){
    // Llamamos al servicio de Firestore para agregar el usuario a la base de datos.
    this.servicioFirestore.agregarUsuario(this.usuarios, this.usuarios.uid)
    .then(res => {
      console.log(this.usuarios);  // Imprimimos el usuario registrado en la consola.
    })
    .catch(err => {
      console.log('Error => ', err);  // Mostramos el error en caso de que ocurra.
    })
  }

  // Función para limpiar los campos del formulario después del registro.
  limpiarInputs(){
    // Inicializamos todos los campos del objeto "usuarios" como vacíos.
    const inputs = {
      uid: this.usuarios.uid = '',
      nombre: this.usuarios.nombre = '',
      apellido: this.usuarios.apellido = '',
      email: this.usuarios.email = '',
      rol: this.usuarios.rol = '',
      password: this.usuarios.password = ''
    }
  }
}
