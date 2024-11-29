// Exporta la interfaz 'celulares', lo que permite usarla en otros archivos.
export interface celulares {
  
  // La propiedad 'id' es de tipo string, y se espera que contenga un identificador único para cada celular.
  id: string;
  
  // La propiedad 'titulo' es de tipo string, y se espera que contenga el título o nombre del celular (ej. modelo o nombre comercial).
  titulo: string;
  
  // La propiedad 'descripcion' es de tipo string, y se espera que contenga una descripción del celular (ej. características, detalles).
  descripcion: string;
  
  // La propiedad 'imagen' es de tipo string, y se espera que contenga una URL o ruta a la imagen del celular.
  imagen: string;
  
  // La propiedad 'alt' es de tipo string, y se espera que contenga una descripción alternativa de la imagen (usada para accesibilidad o cuando la imagen no carga).
  alt: string;
  
  // La propiedad 'marca' es de tipo string, y se espera que contenga el nombre de la marca del celular (ej. Samsung, Apple, Xiaomi).
  marca: string;
}
