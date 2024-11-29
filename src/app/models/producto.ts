// Exporta la interfaz 'Producto', lo que permite que sea utilizada en otros archivos de la aplicación.
export interface Producto {
  
    // La propiedad 'idProducto' es de tipo 'string', y se espera que contenga un identificador único para cada producto.
    idProducto: string;
    
    // La propiedad 'nombre' es de tipo 'string', y se espera que contenga el nombre del producto.
    nombre: string;
    
    // La propiedad 'precio' es de tipo 'number', y se espera que contenga el precio del producto.
    // Este valor podría estar representado en una moneda (por ejemplo, dólares, euros, etc.).
    precio: number;
    
    // La propiedad 'descripcion' es de tipo 'string', y se espera que contenga una descripción detallada del producto.
    descripcion: string;
    
    // La propiedad 'categoria' es de tipo 'string', y se espera que contenga la categoría a la que pertenece el producto (ej. tecnología, ropa, alimentos).
    categoria: string;
    
    // La propiedad 'imagen' es de tipo 'string', y se espera que contenga una URL o ruta hacia la imagen del producto.
    imagen: string;
    
    // La propiedad 'alt' es de tipo 'string', y se espera que contenga una descripción alternativa de la imagen (usada para accesibilidad o si la imagen no se carga correctamente).
    alt: string;
  }
  