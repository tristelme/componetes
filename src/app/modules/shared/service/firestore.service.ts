// Importación de módulos necesarios
import { Injectable } from '@angular/core';  // Importa el decorador Injectable que indica que este servicio puede ser inyectado
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';  // Importa las clases necesarias para interactuar con Firestore
import { Usuario } from 'src/app/models/usuario';  // Importa el modelo de datos Usuario, que representa la estructura de un usuario

// Decorador que marca a la clase como un servicio inyectable
@Injectable({
  providedIn: 'root'  // Indica que este servicio estará disponible en toda la aplicación
})
export class FirestoreService {
  
  // Definición de la colección de usuarios en Firestore
  private usuariosCollection: AngularFirestoreCollection<Usuario>;

  // Constructor que inyecta la instancia de AngularFirestore y configura la colección de usuarios
  constructor(private database: AngularFirestore) {
    // Inicializa la colección de usuarios de Firestore
    this.usuariosCollection = this.database.collection<Usuario>('usuarios');
  }

  // Método para agregar un nuevo usuario a la base de datos
  agregarUsuario(usuario: Usuario, id: string) {
    
    // Retorna una promesa para manejar la respuesta asincrónica
    return new Promise(async (resolve, reject) => {
      
      // Bloque TRY para intentar ejecutar el código de forma segura
      try {
        // Asigna el UID (identificador único) del usuario al objeto 'usuario'
        usuario.uid = id;

        /**
         * Agrega el usuario a la colección de Firestore utilizando su UID como ID de documento
         * y setea la información del usuario que se pasó como parámetro
         */
        const resultado = await this.usuariosCollection.doc(id).set(usuario);

        // Si la operación fue exitosa, resuelve la promesa con el resultado
        resolve(resultado);
      }
      // Bloque CATCH para manejar errores
      catch (error) {
        // Si hay un error, rechaza la promesa y pasa el error
        reject(error);
      }
    });
  }
}
