import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

    this.http.post('http://localhost:3000/login', { email: this.email })
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