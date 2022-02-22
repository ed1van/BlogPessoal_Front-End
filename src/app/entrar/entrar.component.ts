import { environment } from './../../environments/environment.prod';
import { Router } from '@angular/router';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin()

  constructor(

    private authService: AuthService,
    private router: Router


  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar(){
    this.authService.entrar(this.usuarioLogin).subscribe((resp: UsuarioLogin)=>{
      this.usuarioLogin = resp

//console.log(environment.nome) para ver no conole externo da pag

      this.router.navigate(['/inicio'])

    },
     erro => {
      if(erro.status == 401){
        alert('Usuário ou senha não encontrado!') //não aparece o alert
      }
    })
  }





}
