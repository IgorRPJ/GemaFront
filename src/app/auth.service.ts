import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs'
import { environment } from '../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.apiUrl}`
  user = new BehaviorSubject<any>(null)

  constructor(private http: HttpClient) {}

  loadUser() {
    this.getProfile().subscribe({
      next: (data) => {
        this.user.next(data.user)
      },
      error: () => {
        this.user.next(null)
      }
    })
  }
  

  getProfile(): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}/profile`, { withCredentials: true })
  }

  logout() {
    return this.http.get<any>(`${environment.apiUrl}/logout`, { withCredentials: true })
  }

  isAuthenticated(): boolean {
    return !!this.user.value
  }
  
}
