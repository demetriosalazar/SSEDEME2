import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TalleresApiService } from './talleres-api.service';
import { Taller } from './talleres.interface';
import { ActualizarTallerService } from '../modal-actualizar-taller/actualizar-taller.service';

@Component({
  selector: 'app-talleres-page',
  templateUrl: './talleres-page.component.html',
  styleUrls: ['./talleres-page.component.css']
})
export class TalleresPageComponent implements OnInit {

  constructor(private router: Router , private talleresService: TalleresApiService , private modalTS: ActualizarTallerService) { }

  ngOnInit(): void {
    this.initTalleres()

    this.modalTS.$modal_Act.subscribe((val) => {
      this.switchModalAct = val;
    });
    this.modalTS.$modal_Agr.subscribe((val) => {
      this.switchModalAgr = val;
    });
  }

  switchModalAct: boolean = false;
  switchModalAgr: boolean = false;

  talleres: Taller [] = [];

  dataWorkshop!:Taller

  agregar(){
    this.modalTS.$modal_Agr.emit(true);
    this.switchModalAgr = true;
  }

  actualizar(data: Taller){
    this.dataWorkshop= data;

    this.modalTS.$modal_Act.emit(true);
    this.switchModalAct = true;
  }


  eliminar(id:any){
    Swal.fire({
      title: 'Estas seguro?',
      text: "Eliminaras un elemento",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.talleresService.deleteTalleres(id).subscribe( resp => {
          console.log(resp);
          this.initTalleres();
        });
        Swal.fire(
          'Eliminado',
          'Se eliminao de manera exitosa',
          'success'
        )
      }
    })
  }


  cerrarSesion(){
    localStorage.removeItem("token");
    this.router.navigateByUrl("/Login")
  }



  initTalleres(){

    this.talleresService.selectTalleres().subscribe(
      (resp) => {
  
        this.talleres = resp.events;
        console.log(resp);
      }
    )
  
  }



}


