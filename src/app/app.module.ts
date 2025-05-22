import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './_components/profile/profile.component';
import { HomePageComponent } from './_components/home-page/home-page.component';
import { OuvidoriaComponent } from './_components/ouvidoria/ouvidoria.component';
import { NoticiasComponent } from './_components/noticias/noticias.component';
import { TalentosComponent } from './_components/talentos/talentos.component';
import { FooterComponent } from './_components/footer/footer.component';
import { SobreComponent } from './_components/sobre/sobre.component';
import { ConhecaComponent } from './_components/conheca/conheca.component';
import { ComunicacaoComponent } from './_components/comunicacao/comunicacao.component';
import { DocumentosComponent } from './_components/documentos/documentos.component';
import { FeedbackComponent } from './_components/feedback/feedback.component';
import { NoticiaComponent } from './_components/noticia/noticia.component';
import { ForumComponent } from './_components/forum/forum.component';
import { TalentoComponent } from './_components/talento/talento.component';
import { ConhecaCargoComponent } from './_components/conheca-cargo/conheca-cargo.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './_components/admin/admin.component';
import { LoginComponent } from './_components/login/login.component';
import { TemplateComponent } from './_components/template/template.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomePageComponent,
    OuvidoriaComponent,
    NoticiasComponent,
    NoticiaComponent,
    TalentoComponent,
    TalentosComponent,
    SobreComponent,
    ConhecaComponent,
    ComunicacaoComponent,
    DocumentosComponent,
    FeedbackComponent,
    ForumComponent,
    ConhecaCargoComponent,
    FooterComponent,
    AdminComponent,
    LoginComponent,
    TemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
