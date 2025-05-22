import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

interface NoticiaResponse {
  success: boolean;
  noticia: {
    id: number;
    titulo: string;
    texto: string;
    imagem: string;
    templateId: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'http://localhost:3000/noticias';
  private noticiasSubject = new BehaviorSubject<any[]>([]);
  noticias$ = this.noticiasSubject.asObservable();

  constructor(private http: HttpClient) {}

  getNoticias(): Observable<any[]> {
    return this.noticias$;
  }

  loadNoticias(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(data => {
      this.noticiasSubject.next(data);
    });
  }

  getNoticiasFromServer(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/noticias').pipe(
      tap(noticias => {
        console.log('Notícias recebidas do servidor:', noticias);
      })
    );
  }

  criarNoticia(novaNoticia: any): Observable<NoticiaResponse> {
    return this.http.post<NoticiaResponse>('http://localhost:3000/noticias', novaNoticia);
  }
  
  
  
}
