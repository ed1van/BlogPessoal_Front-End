import { PostagemService } from './../service/postagem.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Postagens } from '../model/Postagens';
import { TemaService } from '../service/tema.service';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  listaPostagens: Postagens[]
  tema: Tema = new Tema()
  postagens: Postagens = new Postagens()
  listaTema: Tema[]
  idTema:number
  user: Usuario = new Usuario
  idUsuario = environment.id

  constructor(
    private router: Router,
    private postagemService: PostagemService,
    private temaService: TemaService,
    private authService: AuthService,
    ) { }

  ngOnInit() {

    if(environment.token == '') //se o token estiver vazio...
    {
      //alert('Sua sessão expirou, faça o login novamente')
      this.router.navigate(['/entrar']) // ...vai retoranar para entrar
    }
    this.getAllTemas()//para listar todas os temas
    this.getAllPostagens() //para listar todas as postagens


  }

  getAllTemas()
  {
    this.temaService.getAllTema().subscribe((resp: Tema[])=>{
      this.listaTema = resp
    })
  }

  findByIdTema()
  {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema)=>{
      this.tema = resp
    })
  }


  getAllPostagens()
  {
    this.postagemService.getAllPostagens().subscribe((resp: Postagens[])=>{
      this.listaPostagens = resp

    })
  }
findByIdUsuario()
{
  this.authService.getByIdUsuario(this.idUsuario).subscribe((resp: Usuario)=>{
    this.user = resp
  })
}

  publicar()
  {
      this.tema.id = this.idTema
      this.postagens.tema = this.tema
      this.user.id = this.idUsuario
      this.postagens.usuario = this.user
      this.postagemService.postPostagens(this.postagens).subscribe((resp: Postagens)=>
      {
        this.postagens = resp
        alert('postagem realizada!')
        this.postagens = new Postagens()
        this.getAllPostagens()
      })
  }

}
