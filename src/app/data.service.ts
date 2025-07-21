import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../environments/environment.prod';

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

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = `${environment.apiUrl}/noticias`
  private noticiasSubject = new BehaviorSubject<any[]>([])
  noticias$ = this.noticiasSubject.asObservable()

  constructor(private http: HttpClient) {}

  getNoticias(): Observable<any[]> {
    return this.noticias$
  }

  loadNoticias(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(data => {
      this.noticiasSubject.next(data)
    });
  }

  getNoticiasFromServer(): Observable<any[]> {
    return this.http.get<any[]>(`${environment.apiUrl}/noticias`).pipe(
      tap(noticias => {
        console.log('Notícias recebidas do servidor:', noticias)
      })
    );
  }

  criarNoticia(novaNoticia: any): Observable<NoticiaResponse> {
    return this.http.post<NoticiaResponse>(`${environment.apiUrl}/noticias`, novaNoticia)
  }

  criarNoticiaComImagem(noticia: any, arquivo: File): Observable<any> {
    const formData = new FormData()
    formData.append('titulo', noticia.titulo)
    formData.append('conteudo', noticia.conteudo)
    formData.append('template', noticia.template)
    formData.append('autor', noticia.autor)
    if (arquivo) {
      formData.append('imagem', arquivo)
    }
    return this.http.post(this.apiUrl, formData)
  }
}
