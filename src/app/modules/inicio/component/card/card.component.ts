import { Component } from '@angular/core';
import { Componentes } from 'src/app/models/componentes';
@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
  })
  export class CardComponent {
    //PROPIEDAD PUBLICA --> TIPO ARRAY
    public info: Componentes[];

  //INICIALIZAR LA PROPIEDAD INFO
  constructor() {
    this.info = [
      {
        id: "",
        nombre: "",
        imagen: "",
        alt: ""
      },

     ]
     }
     }