import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent implements OnInit{

  openalert: boolean =false;
  
  constructor() { }

  ngOnInit(): void {
    
  }

  mostrar_en_consola(name:string){
    console.log(name);

    this.openalert=true;
  }

}
