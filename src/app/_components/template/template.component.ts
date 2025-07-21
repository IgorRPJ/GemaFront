import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../data.service';
import { Location } from '@angular/common';

interface Noticia {
  id: number
  titulo: string
  texto: string
  imagem: string
  templateId: number
}

@Component({
  selector: 'app-template',
  standalone: false,
  templateUrl: './template.component.html',
  styleUrl: './template.component.scss'
})
export class TemplateComponent implements OnInit {

  noticia: Noticia | null = null;

  novaNoticia = {
    titulo: '',
    texto: '',
    imagem: '',
    templateId: 0
  }

  novaNoticiaTexto1: string = ''
  novaNoticiaTexto2: string = ''
  novaNoticiaImagem1: string = ''
  novaNoticiaImagem2: string = ''



  templateId!: number

  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.templateId = +params['id']
      console.log('Template ID recebido:', this.templateId)
      this.loadNoticia()
    });
  }

  loadNoticia() {
    this.noticia = {
      id: 1,
      titulo: '',
      texto: '',
      imagem: '',
      templateId: this.templateId
    }
  }

  onFileChange(event: any, imagemNumero: number) {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = () => {
        if (this.templateId === 1 && imagemNumero === 1) {this.novaNoticia.imagem = reader.result as string}
        else{if(imagemNumero === 1){this.novaNoticiaImagem1 = reader.result as string}
        else if(imagemNumero === 2){this.novaNoticiaImagem2 = reader.result as string}
      }
    }
      reader.readAsDataURL(file)
    }
  }

  criarNoticia() {
    this.novaNoticia.templateId = this.templateId

    if(this.templateId === 2){this.novaNoticia.texto = this.novaNoticiaTexto1 + '\n\n' + this.novaNoticiaTexto2}

    if(this.novaNoticia.titulo && this.novaNoticia.texto && this.novaNoticia.templateId){
      this.dataService.criarNoticia(this.novaNoticia).subscribe((res: any) => {
        console.log('Notícia criada:', res)
        const noticiaCriada = res.noticia
        this.router.navigate(['/noticia', noticiaCriada.id])
      })
    }
  }

  ajustarAltura(textarea: HTMLTextAreaElement) {
    textarea.style.height = 'auto'
    textarea.style.height = textarea.scrollHeight + 'px'
  }


  return() {
    this.location.back()
  }
}
