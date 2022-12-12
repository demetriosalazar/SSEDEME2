import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { usuario, RespAuth } from './login.interface';




@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url= environment.urlBase;

  constructor(private http: HttpClient) { }

  apiUrl: string = `${this.url}`;

  usuario: usuario ={
    username : "",
    password : ""
  }

  autentificar(body :any){

    // this.usuario.username=usu;
    // this.usuario.password=contra;

    // let json = JSON.stringify(this.usuario);

    console.log(body);
    const url=`${this.apiUrl}/api/auth/login`;

    return this.http.post<RespAuth>(url,body)
  

  }

}
