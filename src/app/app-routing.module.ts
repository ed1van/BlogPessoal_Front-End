import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { TemaComponent } from './tema/tema.component';

const routes: Routes = [

  {path: '', redirectTo: 'entrar', pathMatch: 'full'}, //toda vez que for vazio ele vai para o entrar

  {path: "entrar", component:EntrarComponent}, //rota entrar
  {path: "cadastrar", component:CadastrarComponent}, //rota cadastrar

  {path: "inicio", component:InicioComponent},

  {path: "tema", component:TemaComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
