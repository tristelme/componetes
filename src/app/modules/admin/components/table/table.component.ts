// Importaciones necesarias para el componente
import { Component, OnInit } from '@angular/core'; // Importa los decoradores Component y OnInit
import { Producto } from 'src/app/models/producto'; // Importa el modelo Producto
import { FormControl } from '@angular/forms'; // Importa FormControl para la validación de los formularios
import { FormGroup } from '@angular/forms'; // Importa FormGroup para agrupar controles en el formulario
import { Validators } from '@angular/forms'; // Importa Validators para agregar validaciones al formulario
import { CrudService } from '../../services/crud.service'; // Importa el servicio CrudService para operaciones CRUD

// Decorador que define el componente
@Component({
  selector: 'app-table', // Selector que se usará en el HTML para el componente
  templateUrl: './table.component.html', // Ruta del archivo de plantilla HTML
  styleUrls: ['./table.component.css'] // Ruta del archivo de estilos CSS
})
// Clase del componente
export class TableComponent {
  // Creamos colección local de productos -> la definimos como array
  coleccionProductos: Producto[] = []; // Array vacío donde se guardarán los productos

  productoSeleccionado!: Producto; // Variable para guardar el producto seleccionado, se define como no nula

  modalVisibleProducto: boolean = false; // Controla la visibilidad del modal para confirmar eliminación de un producto

  // Definimos el formulario para los productos
  producto = new FormGroup({
    nombre: new FormControl('', Validators.required), // Campo 'nombre' con validación de requerimiento
    precio: new FormControl(0, Validators.required), // Campo 'precio' con valor inicial 0 y validación de requerimiento
    descripcion: new FormControl('', Validators.required), // Campo 'descripcion' con validación de requerimiento
    categoria: new FormControl('', Validators.required), // Campo 'categoria' con validación de requerimiento
    imagen: new FormControl('', Validators.required), // Campo 'imagen' con validación de requerimiento
    alt: new FormControl('', Validators.required) // Campo 'alt' con validación de requerimiento
  })

  // Constructor del componente, donde inyectamos el servicio CrudService
  constructor(public servicioCrud: CrudService) { }

  // Método que se ejecuta al iniciar el componente
  ngOnInit(): void {
    // Subscribe -> método de notificación de cambios (observable)
    // Llama al servicio 'obtenerProducto' que obtiene los productos y asigna el resultado a la colección
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto; // Asigna la respuesta del servicio a la colección de productos
    })
  }

  // Método para agregar un nuevo producto
  async agregarProducto() {
    if (this.producto.valid) { // Verifica si el formulario es válido
      let nuevoProducto: Producto = {
        idProducto: '', // Se deja vacío ya que el ID es generado en el backend
        nombre: this.producto.value.nombre!, // Toma el valor del formulario
        precio: this.producto.value.precio!, // Toma el valor del formulario
        descripcion: this.producto.value.descripcion!, // Toma el valor del formulario
        categoria: this.producto.value.categoria!, // Toma el valor del formulario
        imagen: this.producto.value.imagen!, // Toma el valor del formulario
        alt: this.producto.value.alt! // Toma el valor del formulario
      }

      // Intenta agregar el producto usando el servicio CrudService
      await this.servicioCrud.crearProducto(nuevoProducto)
        .then(producto => {
          alert("Ha agregado un nuevo producto con éxito."); // Muestra un mensaje de éxito
          this.producto.reset(); // Resetea el formulario, dejando los campos vacíos
        })
        .catch(error => {
          alert("Ha ocurrido un error al cargar un producto."); // Muestra un mensaje de error
          this.producto.reset(); // Resetea el formulario en caso de error
        })
    }
  }

  // Función para mostrar el modal de eliminación de un producto
  mostrarBorrar(productoSeleccionado: Producto) {
    this.modalVisibleProducto = true; // Muestra el modal
    this.productoSeleccionado = productoSeleccionado; // Asigna el producto a eliminar
  }

  // Función para eliminar el producto
  borrarProducto() {
    this.servicioCrud.eliminarProducto(this.productoSeleccionado.idProducto) // Llama al servicio para eliminar el producto
      .then(respuesta => {
        alert("Se ha podido eliminar con éxito."); // Muestra un mensaje de éxito
      })
      .catch(error => {
        alert("Ha ocurrido un error al eliminar un producto: \n" + error); // Muestra un mensaje de error
      })
  }

  // Función para mostrar el modal de edición de un producto
  mostrarEditar(productoSeleccionado: Producto) {
    this.productoSeleccionado = productoSeleccionado; // Asigna el producto a editar
    // Rellena el formulario con los valores del producto seleccionado
    this.producto.setValue({
      nombre: productoSeleccionado.nombre,
      precio: productoSeleccionado.precio,
      descripcion: productoSeleccionado.descripcion,
      categoria: productoSeleccionado.categoria,
      imagen: productoSeleccionado.imagen,
      alt: productoSeleccionado.alt
    })
  }

  // Función para editar un producto
  editarProducto() {
    let datos: Producto = {
      idProducto: this.productoSeleccionado.idProducto, // Mantiene el ID original
      nombre: this.producto.value.nombre!, // Toma el valor del formulario
      precio: this.producto.value.precio!, // Toma el valor del formulario
      descripcion: this.producto.value.descripcion!, // Toma el valor del formulario
      categoria: this.producto.value.categoria!, // Toma el valor del formulario
      imagen: this.producto.value.imagen!, // Toma el valor del formulario
      alt: this.producto.value.alt! // Toma el valor del formulario
    }

    // Envia los datos al servicio para actualizar el producto
    this.servicioCrud.modificarProducto(this.productoSeleccionado.idProducto, datos)
      .then(producto => {
        alert("El producto se ha modificado con éxito."); // Muestra un mensaje de éxito
      })
      .catch(error => {
        alert("Hubo un problema al modificar el producto: \n" + error); // Muestra un mensaje de error
      })
  }
}
