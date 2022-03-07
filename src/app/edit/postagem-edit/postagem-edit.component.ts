import { Postagens } from './../../model/Postagens';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PostagemService } from './../../service/postagem.service';
import { environment } from 'src/environments/environment.prod';
import { TemaService } from 'src/app/service/tema.service';
import { Tema } from 'src/app/model/Tema';

@Component({
  selector: 'app-postagem-edit',
  templateUrl: './postagem-edit.component.html',
  styleUrls: ['./postagem-edit.component.css']
})
export class PostagemEditComponent implements OnInit {

  postagens: Postagens = new Postagens
  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postagemService: PostagemService,
    private temaService: TemaService,

  ) { }

  ngOnInit() {
    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    let id = this.route.snapshot.params['id']
    this.findByIdPostagem(id)
    this.findAllTemas()

  }

  findByIdPostagem(id: number){
    this.postagemService.getByIdPostagens(id).subscribe((resp: Postagens) => {
      this.postagens = resp
    })
  }

  findByIdTema(){
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }

  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[]) =>{
      this.listaTemas = resp
    })
  }

  atualizar(){
    this.tema.id = this.idTema
    this.postagens.tema = this.tema

    this.postagemService.putPostagens(this.postagens).subscribe((resp: Postagens) => {
      this.postagens = resp
      alert('Postagem atualizada')
      this.router.navigate(['/inicio'])
    })
  }


}
