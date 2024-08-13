import { Component } from '@angular/core';
import { Componentes } from 'src/app/models/componentes';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // PROPIEDAD PÚBLICA --> TIPO ARRAY
  public info: Componentes[];

  // INICIALIZAR LA PROPIEDAD INFO
  constructor() {
    this.info = [
      {
        idCard: "1",
        titulo: "",
        descripcion: "",
        imagen: "",
        alt: ""
      },
    ];
  }
}
                                                                                        