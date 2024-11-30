import { Component } from '@angular/core'; // Importa el decorador "Component" de Angular
import { Usuario } from 'src/app/models/usuario'; // Importa la interfaz "Usuario" que define la estructura de los datos del usuario
import { FirestoreService } from '../../shared/service/firestore.service'; // Importa el servicio Firestore para interactuar con la base de datos
import { Router } from '@angular/router'; // Importa el servicio Router para navegar entre rutas de la aplicación
import { AuthService } from '../services/auth.service'; // Importa el servicio de autenticación
import * as CryptoJS from 'crypto-js'; // Importa la librería CryptoJS para encriptar la contraseña

@Component({
  selector: 'app-iniciosesion', // Define el selector del componente
  templateUrl: './iniciosesion.component.html', // Asocia el archivo de plantilla HTML al componente
  styleUrls: ['./iniciosesion.component.css'] // Asocia el archivo de estilos CSS al componente
})
export class IniciosesionComponent {
  hide = true; // Variable booleana que controla la visibilidad de la contraseña en el campo de entrada

  // Constructor donde se inyectan los servicios necesarios
  constructor(
    public servicioAuth: AuthService, // Servicio de autenticación
    public servicioFirestore: FirestoreService, // Servicio de Firestore
    public servicioRutas: Router // Servicio de rutas para navegar entre vistas
  ) { }

  // Objeto que contiene los datos del usuario que se van a capturar en el formulario
  usuarios: Usuario = {
    uid: '',
    nombre: '',
    apellido: '',
    email: '',
    rol: '',
    password: ''
  }

  // Función asincrónica para iniciar sesión
  async iniciarSesion() {

    // Objeto con las credenciales del usuario (email y contraseña)
    const credenciales = {
      email: this.usuarios.email,
      password: this.usuarios.password
    }

    try {
      // Intentamos obtener el usuario de la base de datos usando el servicio de autenticación
      const usuarioBD = await this.servicioAuth.obtenerUsuario(credenciales.email);

      // Si el usuario no existe o la base de datos no devuelve resultados
      if (!usuarioBD || usuarioBD.empty) {
        alert("Correo electrónico no registrado"); // Muestra alerta si el usuario no existe
        this.limpiarInputs(); // Limpia los campos de entrada
        return; // Sale de la función
      }

      // Obtiene el primer documento de la colección de usuarios (suponiendo que solo hay uno con ese email)
      const usuarioDoc = usuarioBD.docs[0];

      // Extrae los datos del usuario desde el documento y los asigna a la interfaz Usuario
      const usuarioData = usuarioDoc.data() as Usuario;

      // Encripta la contraseña introducida por el usuario
      const hashedPassword = CryptoJS.SHA256(credenciales.password).toString();

      // Compara la contraseña encriptada con la que está almacenada en la base de datos
      if (hashedPassword !== usuarioData.password) {
        alert("Contraseña incorrecta"); // Muestra alerta si las contraseñas no coinciden
        this.usuarios.password = ''; // Limpia el campo de la contraseña
        return; // Sale de la función
      }

      // Si las credenciales son correctas, se inicia la sesión con el servicio Auth
      const res = await this.servicioAuth.iniciarSesion(credenciales.email, credenciales.password)
        .then(res => {
          alert('¡Se pudo ingresar con éxito :)!'); // Alerta de éxito al iniciar sesión
          this.servicioRutas.navigate(['/inicio']); // Navega a la página de inicio
        })
        .catch(err => {
          alert('Hubo un problema al iniciar sesión :( ' + err); // Muestra un error si falla el inicio de sesión
          this.limpiarInputs(); // Limpia los campos de entrada
        })
    } catch(error){
      this.limpiarInputs(); // Si ocurre un error en el bloque try, limpia los campos de entrada
    }
  }

  // Función para limpiar los campos de entrada (email y password)
  limpiarInputs() {
    const inputs = {
      email: this.usuarios.email = '', // Limpia el campo de email
      password: this.usuarios.password = '' // Limpia el campo de la contraseña
    }
  }
}
