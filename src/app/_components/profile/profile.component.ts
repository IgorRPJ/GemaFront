import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{

  posts = Array(8).fill(0).map((_, i) => ({image: `https://picsum.photos/300/300?random=${i}`}))

  constructor(private location: Location, private authService: AuthService) {}


  user: any = null

  ngOnInit() {
    this.authService.getProfile().subscribe({
      next: (data) => {
        this.user = data.user
        console.log('Usuário logado:', this.user)
      },
      error: (err) => {
        console.error('Erro ao obter perfil:', err)
      }
    })
  }

  return(){
    this.location.back()
  }

}
