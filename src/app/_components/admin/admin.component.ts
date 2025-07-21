import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.prod';

interface NoticiaResponse {
  success: boolean
  noticia: {
    id: number
    titulo: string
    texto: string
    imagem: string
    templateId: number
  };
}

@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {

  novaNoticia = {
    titulo: '',
    texto: '',
    imagem: '',
    templateId: 0
  };

  constructor(private http: HttpClient, private router: Router) {}

  onFileChange(event: any) {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        this.novaNoticia.imagem = reader.result as string
      }
      reader.readAsDataURL(file)
    }
  }

  criarNoticia() {
    if (this.novaNoticia.titulo && this.novaNoticia.texto && this.novaNoticia.templateId) {
      this.http.post<NoticiaResponse>(`${environment.apiUrl}/noticias`, this.novaNoticia).subscribe(response => {
        console.log('Notícia criada com sucesso', response)
        const noticiaCriada = response.noticia
        this.router.navigate(['/noticia', noticiaCriada.id])
      })
    } else {
      console.log('Por favor, preencha todos os campos!')
    }
  }
  

  templates = [
    {
      id: 1,
      nome: 'Template 1',
      preview: 'assets/templates/template1.jpg'
    },
    {
      id: 2,
      nome: 'Template 2',
      preview: 'assets/templates/template2.jpg'
    },
    {
      id: 3,
      nome: 'Template 3',
      preview: 'assets/templates/template3.jpg'
    },
    {
      id: 4,
      nome: 'Template 4',
      preview: 'assets/templates/template3.jpg'
    },
    {
      id: 5,
      nome: 'Template 5',
      preview: 'assets/templates/template3.jpg'
    }
  ];

}