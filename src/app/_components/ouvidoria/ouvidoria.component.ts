import { Component } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-ouvidoria',
  standalone: false,
  templateUrl: './ouvidoria.component.html',
  styleUrl: './ouvidoria.component.scss'
})
export class OuvidoriaComponent {

  constructor(private location: Location) {}

  return(){
    this.location.back()
  }
  
}
