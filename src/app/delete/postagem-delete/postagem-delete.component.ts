import { Component, OnInit } from '@angular/core';
import { environment } from './../../../environments/environment.prod';
import { PostagemService } from './../../service/postagem.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Postagens } from './../../model/Postagens';


@Component({
  selector: 'app-postagem-delete',
  templateUrl: './postagem-delete.component.html',
  styleUrls: ['./postagem-delete.component.css']
})
export class PostagemDeleteComponent implements OnInit {

  postagens: Postagens = new Postagens()
  idPost: number

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postagemService: PostagemService,

  ) { }

  ngOnInit() {

    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    this.idPost = this.route.snapshot.params['id']
    this.findByIdPostagem(this.idPost)
  }

  findByIdPostagem(id: number){
    this.postagemService.getByIdPostagens(id).subscribe((resp: Postagens) => {
      this.postagens = resp
    })
  }


  apagar(){
    this.postagemService.deletePostagens(this.idPost).subscribe(()=>{
      alert('Postagem apagada')
      this.router.navigate(['/inicio'])
    })
  }

}
