export interface Usuario {
    uid: string | any; // atributos del tipo "any" reciben vacíos o indefinidos
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    rol: string;

}