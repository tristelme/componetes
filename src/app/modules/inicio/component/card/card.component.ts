import { Component } from '@angular/core';
import { Componentes } from 'src/app/models/componentes';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
// PROPIEDAD PÚBLICA (TIPO: ARRAY)
public info: Componentes[];
  
constructor(){
  this.info = [
    {
    idCard:"",
    titulo: "",
    descripcion: "holaa",
    imagen: "https://lumiere-a.akamaihd.net/v1/images/og_cars_lightningmcqueenday_18244_4435f27a.jpeg?region=0,0,1200,630",
    alt: ""
    },
    {
      idCard:"",
      titulo: "",
      descripcion: "",
      imagen: "",
      alt: ""
    },
    {
      idCard:"",
      titulo: "",
      descripcion: "",
      imagen: "",
      alt: ""
    }
  ]
}
}
                                                                                        