
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UsuarioLogin } from '../model/UsuarioLogin';
import { Usuario } from './../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient) { }



  entrar(usuarioLogin:UsuarioLogin): Observable<UsuarioLogin>
{
  return this.http.post<UsuarioLogin>('https://blogpessoaldoed.herokuapp.com/usuarios/logar', usuarioLogin)
}



cadastrar(usuario: Usuario): Observable<Usuario>
{
  return this.http.post<Usuario>('https://blogpessoaldoed.herokuapp.com/usuarios/cadastrar', usuario)
}

}

