import { Component } from '@angular/core';
// IMPORTAMOS INTERFAZ
import { celulares } from 'src/app/models/celulares';
@Component({
  selector: 'app-celulares',
  templateUrl: './celulares.component.html',
  styleUrls: ['./celulares.component.css']
})
export class CelularesComponent {
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
