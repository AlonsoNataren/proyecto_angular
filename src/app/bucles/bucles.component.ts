import { Component, OnInit} from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrl: './bucles.component.css'
})
export class BuclesComponent {

  personas: Persona[] = [
    { nombre: 'Juan', edad: 20 },
    { nombre: 'Ana', edad: 25 },
    { nombre: 'Luis', edad: 35 },
    { nombre: 'Maria', edad: 30 },

  ];

  constructor() {}

  ngOnInit():void{

  }

}
