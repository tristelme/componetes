// Exporta la interfaz 'Usuario', lo que permite que sea utilizada en otros archivos de la aplicación.
export interface Usuario {
  
    // La propiedad 'uid' puede ser de tipo 'string' o cualquier otro tipo de dato ('any').
    // 'uid' representa un identificador único para cada usuario. El uso de 'any' hace que esta propiedad
    // pueda ser de cualquier tipo, aunque se recomienda usar un tipo más específico si es posible.
    uid: string | any;
    
    // La propiedad 'nombre' es de tipo 'string', y se espera que contenga el primer nombre del usuario.
    nombre: string;
    
    // La propiedad 'apellido' es de tipo 'string', y se espera que contenga el apellido del usuario.
    apellido: string;
    
    // La propiedad 'email' es de tipo 'string', y se espera que contenga la dirección de correo electrónico del usuario.
    email: string;
    
    // La propiedad 'password' es de tipo 'string', y se espera que contenga la contraseña del usuario.
    password: string;
    
    // La propiedad 'rol' es de tipo 'string', y se espera que contenga el rol o tipo de usuario (ej. 'admin', 'usuario', etc.).
    rol: string;
  }
  