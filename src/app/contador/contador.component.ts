import { Component } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {

  //Esta manera es para asignar variables definiendo su tipo
/*   nombre:string = 'Luis Alonso '
     apellido ='Nataren Lopez'
     edad:number = 35 */

  //Esta manera es definiendo un objeto (objeto persona)con sus elementos

  persona:Persona = {
        nombre: 'Luis Alonso',
        apellido: 'Nataren Lopez',
        edad: 35
    

  }
  numero:number =1

//Esto es un metodo
  decrementar(){
    this.numero --;
  }

  incrementar(){
    this.numero++;
  }

}


