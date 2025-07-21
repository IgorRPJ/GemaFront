import { Component, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-noticia',
  standalone: false,
  templateUrl: './noticia.component.html',
  styleUrl: './noticia.component.scss'
})
export class NoticiaComponent implements OnInit {

  noticia: any

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = parseInt(params.get('id') || '0')
      
      this.dataService.getNoticiasFromServer().subscribe((noticias) => {
        this.noticia = noticias.find(n => n.id === id)
        console.log('Notícia carregada:', this.noticia)
      })
    })
  }

  return() {
    this.location.back()
  }

}
