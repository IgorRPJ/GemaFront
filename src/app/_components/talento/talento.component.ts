import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-talento',
  standalone: false,
  templateUrl: './talento.component.html',
  styleUrl: './talento.component.scss'
})
export class TalentoComponent {

  lista: any = [
    { img: 'https://placehold.co/600x400', texto: 'Comentario.' },
    { img: 'https://placehold.co/600x400', texto: 'Comentario.' },
    { img: 'https://placehold.co/600x400', texto: 'Comentario.' },
    { img: 'https://placehold.co/600x400', texto: 'Comentario.' },
    { img: 'https://placehold.co/600x400', texto: 'Comentario.' },
    { img: 'https://placehold.co/600x400', texto: 'Comentario.' },
    { img: 'https://placehold.co/600x400', texto: 'Comentario.' },
    { img: 'https://placehold.co/600x400', texto: 'Comentario.' },
    { img: 'https://placehold.co/600x400', texto: 'Comentario.' },
    { img: 'https://placehold.co/600x400', texto: 'Comentario.' },
    { img: 'https://placehold.co/600x400', texto: 'Comentario.' },
    { img: 'https://placehold.co/600x400', texto: 'Comentario.' },
    { img: 'https://placehold.co/600x400', texto: 'Comentario.' },
    { img: 'https://placehold.co/600x400', texto: 'Comentario.' },
    { img: 'https://placehold.co/600x400', texto: 'Comentario.' },
    { img: 'https://placehold.co/600x400', texto: 'Comentario.' },
  ]

  constructor(private location: Location) {}

  return(){
    this.location.back()
  }

}
