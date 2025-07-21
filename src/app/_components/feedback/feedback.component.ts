import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-feedback',
  standalone: false,
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.scss'
})
export class FeedbackComponent {

  constructor(private location: Location) {}

  return(){
    this.location.back()
  }

}
