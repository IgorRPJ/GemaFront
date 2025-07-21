import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.prod';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email: string = ''
  errorMessage: string = ''

  constructor(private router: Router, private http: HttpClient) {}

  onSubmit() {
    this.errorMessage = ''

    this.http.post(`${environment.apiUrl}/login`, { email: this.email })
      .subscribe(
        (response: any) => {
          if (response.success) {
            this.router.navigate(['/admin'])
          }
        },
        (error) => {
          this.errorMessage = 'E-mail inválido. Acesso não autorizado.'
        }
      )
  }

}