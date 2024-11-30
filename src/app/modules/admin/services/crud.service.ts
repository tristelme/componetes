// Importa las dependencias necesarias de Angular y Firebase
import { Injectable } from '@angular/core';
import { Producto } from 'src/app/models/producto'; // Importa el modelo Producto
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'; // Importa servicios de Firestore
import { map } from 'rxjs'; // Importa el operador 'map' de RxJS

// El decorador @Injectable indica que este servicio puede ser inyectado en otros componentes o servicios
@Injectable({
  providedIn: 'root' // El servicio estará disponible a nivel de toda la aplicación
})
export class CrudService {
  
  // Define una variable privada que almacenará la colección de productos en Firestore
  private productosCollection: AngularFirestoreCollection<Producto>;

  // El constructor inyecta el servicio AngularFirestore, que se usa para interactuar con la base de datos
  constructor(private database: AngularFirestore) {
    // Inicializa la colección de productos dentro de Firestore (nombre de la colección es 'producto')
    this.productosCollection = database.collection('producto');
  }

  // Método para crear un nuevo producto en la base de datos
  crearProducto(producto: Producto) {
    return new Promise(async (resolve, reject) => {
      try {
        // Crea un ID único para el producto utilizando el método de Firestore
        const idProducto = this.database.createId();

        // Asigna el ID generado al atributo idProducto del objeto producto
        producto.idProducto = idProducto;

        // Guarda el producto en la colección 'producto' usando el ID generado
        const resultado = await this.productosCollection.doc(idProducto).set(producto);

        // Devuelve el resultado del proceso (confirmación de éxito)
        resolve(resultado);
      } catch (error) {
        // En caso de error, lo rechaza y devuelve el error
        reject(error);
      }
    });
  }

  // Método para obtener todos los productos de la base de datos
  obtenerProducto() {
    /*
      snapshotChanges: obtiene una instantánea del estado de los datos en Firestore.
      pipe: permite encadenar operaciones reactivas.
      map: mapea o transforma los datos recibidos, extrayendo la información de los documentos de la colección.
      action: contiene las acciones que se pueden realizar sobre los documentos de la colección.
    */
    return this.productosCollection.snapshotChanges().pipe(
      map(action => action.map(a => a.payload.doc.data())) // Mapea los datos extraídos y los devuelve como un array
    );
  }

  // Método para modificar un producto existente
  modificarProducto(idProducto: string, nuevaData: Producto) {
    /*
      Accede al documento específico de la colección 'producto' usando el ID proporcionado
      y lo actualiza con los nuevos datos pasados a través del parámetro 'nuevaData'.
    */
    return this.database.collection('producto').doc(idProducto).update(nuevaData);
  }

  // Método para eliminar un producto por su ID
  eliminarProducto(idProducto: string) {
    return new Promise((resolve, reject) => {
      try {
        // Elimina el producto especificado en la colección usando su ID
        const respuesta = this.productosCollection.doc(idProducto).delete();

        // Devuelve la respuesta, confirmando la eliminación
        resolve(respuesta);
      } catch (error) {
        // En caso de error, lo rechaza y devuelve el error
        reject(error);
      }
    });
  }
}
