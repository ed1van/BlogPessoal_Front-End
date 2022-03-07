import { Tema } from './../model/Tema';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(private http: HttpClient) { }
  //HttpClient para ter acesso ao método http
  token ={
    headers: new HttpHeaders().set('Authorization', environment.token)
  } // Está dando a permissão através de um token de permissão

  getAllTema(): Observable<Tema[]>
  {
    return this.http.get<Tema[]>('http://localhost:8080/tema', this.token)
  }

  getByIdTema(id: number):  Observable<Tema>
  {
    return this.http.get<Tema>(`http://localhost:8080/tema/${id}`, this.token)
  }


  postTema(tema: Tema): Observable<Tema> //Observable: priorizar meu Model <Tema>
  {
    return this.http.post<Tema>('http://localhost:8080/tema', tema, this.token)
  } //this.token traz o token que foi criado acima, para validar o post tema

  putTema(tema: Tema): Observable<Tema>
  {
    return this.http.put<Tema> ('http://localhost:8080/tema', tema, this.token)
  }

  deleteTema(id: number) // não precisa do Observable .
  //id: number só é necessário passar uma variável
  {
    return this.http.delete(`http://localhost:8080/tema/${id}`, this.token)
    //nesse se usa ``crase
    //${id} para passar o id que será deletado
  }




}
