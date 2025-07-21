import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-biografias',
  standalone: false,
  templateUrl: './biografias.component.html',
  styleUrl: './biografias.component.scss'
})
export class BiografiasComponent implements OnInit {
  
  nova = { nome: '', biografia: '', foto_url: '' };
  biografias: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.carregar();
  }

  carregar() {
    this.http.get<any[]>(`${environment.apiUrl}/api/biografias`)
      .subscribe(data => this.biografias = data);
  }

  criarBiografia() {
    this.http.post(`${environment.apiUrl}/api/biografias`, this.nova)
      .subscribe(() => {
        this.nova = { nome: '', biografia: '', foto_url: '' };
        this.carregar();
      });
  }

  deletar(id: number) {
    this.http.delete(`${environment.apiUrl}/api/biografias/${id}`)
      .subscribe(() => this.carregar());
  }
  
  
}
