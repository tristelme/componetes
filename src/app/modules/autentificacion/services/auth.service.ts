import { Injectable } from '@angular/core';
// Importamos el servicio AngularFireAuth para gestionar la autenticación con Firebase.
import { AngularFireAuth } from '@angular/fire/compat/auth';
// Importamos el servicio AngularFirestore para interactuar con la base de datos Firestore de Firebase.
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'  // Indicamos que este servicio estará disponible de manera global en la aplicación.
})
export class AuthService {
  // Inyectamos los servicios de autenticación de Firebase (AngularFireAuth) y Firestore (AngularFirestore).
  constructor(
    private auth: AngularFireAuth,  // Servicio de autenticación de Firebase.
    private servicioFirestore: AngularFirestore  // Servicio de Firestore de Firebase.
  ) { }

  // Función para registrar un nuevo usuario con su email y contraseña.
  registrar(email: string, password: string){
    // Utilizamos el método de Firebase para crear un usuario con el email y la contraseña proporcionados.
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  // Función para iniciar sesión con un usuario existente utilizando su email y contraseña.
  iniciarSesion(email: string, password: string){
    // Llamamos al método de Firebase para iniciar sesión con el email y la contraseña proporcionados.
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  // Función para cerrar sesión del usuario actualmente autenticado.
  cerrarSesion(){
    // Llamamos al método de Firebase para cerrar sesión y quitar el token de autenticación.
    return this.auth.signOut();
  }

  // Función para obtener el UID (ID único) del usuario actualmente autenticado.
  async obtenerUid(){
    // Obtenemos el usuario actual utilizando el método 'currentUser' de Firebase Auth.
    const user = await this.auth.currentUser;

    /*
      Si no hay un usuario autenticado (el valor de user es null), retornamos null.
      Esto puede suceder si el usuario no está logueado o si hubo problemas con la conexión durante el registro o inicio de sesión.
    */
    if(user == null){
      return null;
    } else {
      // Si el usuario existe, retornamos su UID (identificador único).
      return user.uid;
    }
  }

  // Función para obtener la información de un usuario desde Firestore utilizando su email.
  obtenerUsuario(email: string){
    /**
     * Usamos el servicio Firestore para obtener la colección 'usuarios' y filtramos por el email que nos pase el parámetro.
     * La función 'where' compara el valor del email almacenado en la base de datos con el email proporcionado.
     * Finalmente, llamamos al método 'get()' para obtener los resultados de la búsqueda.
     * Esto devuelve una promesa que se resuelve con el resultado o se rechaza si ocurre algún error.
     */
    return this.servicioFirestore.collection('usuarios', ref => ref.where('email', '==', email)).get().toPromise();
  }
}
