import { Component } from '@angular/core';
// IMPORTAMOS INTERFAZ
import { celulares } from 'app/models/celulares';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
   // PROPIEDAD PÚBLICA (TIPO: ARRAY)
   public info: celulares[];
  
   constructor(){
     this.info = [
      {
        id:"", 
        titulo:"",
        descripcion:"", 
        imagen:"",
        alt:"", 
        marca:"",
      },
      {
        id:"", 
        titulo:"",
        descripcion:"", 
        imagen:"",
        alt:"", 
        marca:"",
      },
      {
        id:"", 
        titulo:"",
        descripcion:"", 
        imagen:"",
        alt:"", 
        marca:"",
      },
     ]
   }
}