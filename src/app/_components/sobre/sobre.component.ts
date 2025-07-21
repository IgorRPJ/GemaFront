import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sobre',
  standalone: false,
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.scss'
})
export class SobreComponent {

  constructor(private location: Location) {}

  return(){
    this.location.back()
  }

}
