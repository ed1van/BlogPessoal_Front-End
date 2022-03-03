import { TemaService } from './../service/tema.service';
import { Tema } from './../model/Tema';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {

  tema: Tema = new Tema()
  listaTemas: Tema[]

  constructor(
    private router: Router,
    private TemaService: TemaService
    ) { }

  ngOnInit() {
    if(environment.token == '')
    {
      //alert('Sua sessão expirou, faça o login novamente')
      this.router.navigate(['/entrar'])
    }

    this.findAllTemas()


  }

findAllTemas()
{
this.TemaService.getAllTema().subscribe((resposta: Tema[])=>{
  this.listaTemas = resposta
})

}

  cadastrar()
  {//subscribe vai sobreescrever para o formato Json
    //=> escreve mais informação dentro da informação principal
    //resp: Tema vai me trazer as informções
    this.TemaService.postTema(this.tema).subscribe((resp: Tema)=>{
      this.tema = resp
      alert('Tema cadastrado com sucesso!') // alert de cadastro com sucesso
      this.findAllTemas() //para trazer todos os temas
      this.tema = new Tema() //depois que o site atualizar ele vai zerar, que vai ser outro tema
    })
  }

}
