import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { DataService } from '../../data.service';
import { Router } from '@angular/router';

declare var bootstrap: any

@Component({
  selector: 'app-home-page',
  standalone: false,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  lista: any[] = []
  noticiasAleatorias: any[] = []
  sugestoesFiltradas: any[] = []
  suggestedList: any[] = []
  showSearch = false
  searchTerm = ''

  constructor(private location: Location, private dataService: DataService, private router: Router) {}

  ngOnInit() {
    this.dataService.loadNoticias()
    this.loadNoticias()
  }
  
  loadNoticias() {
    this.dataService.getNoticias().subscribe((data) => {
      this.lista = data
      this.noticiasAleatorias = this.getRandomNoticias(this.lista, 4)
    });
  }
  
  filterNoticias() {
    const noticiaEncontrada = this.lista.find(noticia =>
      noticia.titulo.toLowerCase().includes(this.searchTerm.toLowerCase()) || noticia.texto.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  
    if (noticiaEncontrada) {
      this.router.navigate(['/noticia', noticiaEncontrada.id])
      this.hideSearch()
    }
  }
  
  updateSuggestions() {
    const term = this.searchTerm.toLowerCase()
    this.suggestedList = this.lista.filter(noticia =>
      noticia.titulo.toLowerCase().includes(term) || noticia.texto.toLowerCase().includes(term)
    )
  }
  
  return() {
    this.location.back()
  }

  closeOffcanvas() {
    const offcanvasElement = document.getElementById('menuLateral')
    const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement)
    if (offcanvas) {
      offcanvas.hide()
    }
  }

  toggleSearch() {
    this.showSearch = !this.showSearch
    if (!this.showSearch) {
      this.searchTerm = ''
      this.noticiasAleatorias = this.getRandomNoticias(this.lista, 4)
    }
  }
  
  hideSearch() {
    this.showSearch = false
    this.searchTerm = ''
    this.suggestedList = []
    this.noticiasAleatorias = this.getRandomNoticias(this.lista, 4)
  }

  adiarHideSearch() {
    setTimeout(() => this.hideSearch(), 200)
  }
  
  viewNoticia(noticia: any) {
    console.log('Visualizando notícia:', noticia)
    this.router.navigate(['/noticia', noticia.id]);
  }

  getRandomNoticias(lista: any[], quantidade: number): any[] {
    const embaralhado = [...lista].sort(() => Math.random() - 0.5).slice(0, quantidade)
    return embaralhado.sort((a, b) => a.titulo.localeCompare(b.titulo))
  }

  onSelectNoticia(noticia: any) {
    console.log('Notícia selecionada por clique:', noticia)
    this.router.navigate(['/noticia', noticia.id])
    this.hideSearch()
  }  
  
}
