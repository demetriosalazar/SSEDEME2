import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  ngOnInit(): void {
    if(localStorage.getItem("token")!=null){
      this.router.navigateByUrl("/MAIN_PAGE")
    }

  }

  usuario: string="";
  contrasena: string="";

  constructor(private logService: LoginService, private router: Router){}

  verificar(){

    const body = {
      username : this.usuario,
      password : this.contrasena 
    }
    
if(this.usuario!="" && this.contrasena!=""){
  this.logService.autentificar(body).subscribe(resp =>{
    localStorage.setItem("token",resp.token);
    if(resp.status){
      this.router.navigateByUrl("/DEMO")
    }
  }
  ,error =>{
    console.log(error.error.message);
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: error.error.message,
      showConfirmButton: false,
      timer: 1500
    })
  });
}

  }

}
