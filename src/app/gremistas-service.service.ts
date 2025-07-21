import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GremistasServiceService {

  constructor(private http: HttpClient) { }

  private aptUrl = 'http://localhost:3000/gremistas'

  getGremista(){return this.http.get(this.aptUrl)}

  addGremista(formData: FormData){return this.http.post(this.aptUrl, formData)}

  deleteGremista(id: number){return this.http.delete(`${this.aptUrl}/${id}`)}
}
