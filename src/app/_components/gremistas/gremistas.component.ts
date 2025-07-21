import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GremistasServiceService } from '../../gremistas-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-gremistas',
  standalone: false,
  templateUrl: './gremistas.component.html',
  styleUrl: './gremistas.component.scss'
})
export class GremistasComponent implements OnInit {
  gremistas: any[] = []
  nome: string = ''
  biografia: string = ''
  foto!: File
  successMessage: string = ''
  errorMessage: string = ''
  API_URL = 'http://localhost:3000'
  @ViewChild('fileInput') fileInput!: ElementRef


  constructor(private gremistasService: GremistasServiceService, private http: HttpClient) { }

  ngOnInit(): void {
    this.loadGremistas()
  }

  loadGremistas() {
    this.gremistasService.getGremista().subscribe({
      next: (data: any) => {
        this.gremistas = data
      },
      error: (error) => {
        console.log('erro ao carregar gremista', error)
      }
    })
  }

  deleteGremista(id: number) {
    this.gremistasService.deleteGremista(id).subscribe({
      next: () => {
        this.gremistas = this.gremistas.filter(g => g.id !== id)
      },
      error: (error) => {
        console.error('Erro ao deletar gremista', error)
      }
    })
  }

  addGremista() {
    if (!this.nome || !this.biografia || !this.foto){
      this.errorMessage = 'Por favor, preencha todos os campos'
      this.successMessage = ''
      return
    }

    const formData = new FormData()
    formData.append('nome', this.nome)
    formData.append('biografia', this.biografia)
    formData.append('foto', this.foto)

    this.http.post(`${this.API_URL}/gremistas`, formData).subscribe({
      next: (res) => {
        console.log('gremista adicionado')
        this.loadGremistas()
        this.successMessage = 'Gremista adiconado com sucesso'
        this.errorMessage = ''
        this.resetForm()
      },
      error: (err) => {
        console.error('Erro ao adicionar gremista', err)
        this.errorMessage = 'Falha ao adicionar gremista'
        this.successMessage = ''
      }
    })
  }

  onFileSelected(event: any) {
    const file = event.target.files[0]
    if (file) { this.foto = file }
  }

  resetForm(){
    this.nome = ''
    this.biografia = ''
    this.foto = undefined as any

    if(this.fileInput){
      this.fileInput.nativeElement.value = ''
    }
  }
}
