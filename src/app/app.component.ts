import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'projeto';
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.loadUser()
  }

}
