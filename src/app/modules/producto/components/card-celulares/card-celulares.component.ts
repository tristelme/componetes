// Importación de módulos necesarios
import { Component } from '@angular/core';  // Importa el decorador Component para definir el componente Angular
import { Producto } from 'src/app/models/producto';  // Importa la clase Producto que define la estructura de los productos
import { CrudService } from 'src/app/modules/admin/services/crud.service';  // Importa el servicio CrudService para interactuar con la base de datos

// Declaración del componente Angular
@Component({
  selector: 'app-card-celulares',  // Define el selector que se usará para agregar este componente en otros templates
  templateUrl: './card-celulares.component.html',  // Archivo HTML asociado al componente
  styleUrls: ['./card-celulares.component.css']  // Archivo de estilos CSS asociado al componente
})
export class CardCelularesComponent {
  // Colección de todos los productos de forma local
  coleccionProductos: Producto[] = [];  // Inicializa un array vacío para almacenar todos los productos

  // Colección de productos de una sola categoría (celulares en este caso)
  coleccionCelulares: Producto[] = [];  // Inicializa un array vacío para almacenar productos de la categoría "Celulares"

  // Variable para seleccionar productos específicos
  productoSeleccionado!: Producto;  // Variable para almacenar el producto seleccionado, tipo Producto

  // Variable para manejar estado del modal (para mostrar u ocultar la ventana modal)
  modalVisible: boolean = false;  // Inicializa la variable que controla la visibilidad del modal (false significa cerrado)

  // Constructor del componente, donde se inyecta el servicio CrudService
  constructor(public servicioCrud: CrudService) { }

  // Método que se ejecuta cuando se inicializa el componente (cuando se renderiza)
  ngOnInit(): void {
    // Llamamos al método 'obtenerProducto' del servicio CrudService y nos suscribimos a los cambios
    // Esto permite recibir los productos desde la base de datos y actuar ante cualquier modificación
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      // Asignamos la colección de productos recibidos desde el servicio a la variable coleccionProductos
      this.coleccionProductos = producto;

      // Filtramos los productos y mostramos solo los de la categoría "Celulares"
      this.mostrarProductoCelulares();
    });
  }

  // Función para filtrar los productos de tipo "Celulares" y agregarlos a la colección correspondiente
  mostrarProductoCelulares() {
    // Iteramos sobre cada producto de la colección de productos
    this.coleccionProductos.forEach(producto => {
      // Si el producto es de la categoría "Celulares", lo agregamos a la colección coleccionAlimentacion
      if (producto.categoria === "Celulares") {
        this.coleccionCelulares.push(producto);
      }
    });
  }

  // Función para manejar la selección de un producto y mostrar más detalles en el modal
  mostrarVer(info: Producto) {
    // Cambia el estado del modal para hacerlo visible
    this.modalVisible = true;

    // Asigna el producto seleccionado a la variable productoSeleccionado
    this.productoSeleccionado = info;
  }
}
