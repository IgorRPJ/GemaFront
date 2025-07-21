import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './_components/home-page/home-page.component';
import { OuvidoriaComponent } from './_components/ouvidoria/ouvidoria.component';
import { SobreComponent } from './_components/sobre/sobre.component';
import { DocumentosComponent } from './_components/documentos/documentos.component';
import { NoticiasComponent } from './_components/noticias/noticias.component';
import { NoticiaComponent } from './_components/noticia/noticia.component';
import { FeedbackComponent } from './_components/feedback/feedback.component';
import { ForumComponent } from './_components/forum/forum.component';
import { TalentoComponent } from './_components/talento/talento.component';
import { TalentosComponent } from './_components/talentos/talentos.component';
import { ConhecaCargoComponent } from './_components/conheca-cargo/conheca-cargo.component';
import { ProfileComponent } from './_components/profile/profile.component';
import { LoginComponent } from './_components/login/login.component';
import { AdminComponent } from './_components/admin/admin.component';
import { TemplateComponent } from './_components/template/template.component';
import { GremistasComponent } from './_components/gremistas/gremistas.component';
import { AuthGuard } from './auth.guard';
import { BiografiasComponent } from './_components/biografias/biografias.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'ouvidoria', component: OuvidoriaComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'documentos', component: DocumentosComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'noticia/:id', component: NoticiaComponent },
  { path: 'feedback', component: FeedbackComponent },
  { path: 'forum', component: ForumComponent },
  { path: 'talento', component: TalentoComponent },
  { path: 'talentos', component: TalentosComponent },
  { path: 'conheca/cargo', component: ConhecaCargoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'gremistas', component: GremistasComponent },
  { path: 'template/:id', component: TemplateComponent, canActivate: [AuthGuard] },
  { path: 'admin/biografia', component: BiografiasComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
