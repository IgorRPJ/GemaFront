import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-talentos',
  standalone: false,
  templateUrl: './talentos.component.html',
  styleUrl: './talentos.component.scss'
})
export class TalentosComponent {

  public lista: any = [
    { usuarioNome: 'Igor',      img: 'https://placehold.co/600x400'},
    { usuarioNome: 'Gustavo',   img: 'https://placehold.co/600x400'},
    { usuarioNome: 'Gio',       img: 'https://placehold.co/600x400'},
    { usuarioNome: 'Estéfany',  img: 'https://placehold.co/600x400'},
    { usuarioNome: 'Mateus',    img: 'https://placehold.co/600x400'},

    { usuarioNome: 'Igor',      img: 'https://placehold.co/600x400'},
    { usuarioNome: 'Gustavo',   img: 'https://placehold.co/600x400'},
    { usuarioNome: 'Gio',       img: 'https://placehold.co/600x400'},
    { usuarioNome: 'Estéfany',  img: 'https://placehold.co/600x400'},
    { usuarioNome: 'Mateus',    img: 'https://placehold.co/600x400'},

    { usuarioNome: 'Igor',      img: 'https://placehold.co/600x400'},
    { usuarioNome: 'Gustavo',   img: 'https://placehold.co/600x400'},
    { usuarioNome: 'Gio',       img: 'https://placehold.co/600x400'},
    { usuarioNome: 'Estéfany',  img: 'https://placehold.co/600x400'},
    { usuarioNome: 'Mateus',    img: 'https://placehold.co/600x400'},

    { usuarioNome: 'Igor',      img: 'https://placehold.co/600x400'},
    { usuarioNome: 'Gustavo',   img: 'https://placehold.co/600x400'},
    { usuarioNome: 'Gio',       img: 'https://placehold.co/600x400'},
    { usuarioNome: 'Estéfany',  img: 'https://placehold.co/600x400'},
    { usuarioNome: 'Mateus',    img: 'https://placehold.co/600x400'},
    
  ]

  constructor(private location: Location) {}

  return(){
    this.location.back()
  }

}
