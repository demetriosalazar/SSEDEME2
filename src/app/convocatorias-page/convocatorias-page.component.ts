import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ModalService } from '../modal_actualizar/modal.service';
import { AnnouncementAPIService } from './announcement-api.service';
import { Event } from './Announcement.interface';


@Component({
  selector: 'app-convocatorias-page',
  templateUrl: './convocatorias-page.component.html',
  styleUrls: ['./convocatorias-page.component.css']
})
export class ConvocatoriasPageComponent implements OnInit {

  announcements: Event [] = []

  dataAnnouncement!:Event

  constructor(private modalS: ModalService,private router: Router, private announcementService: AnnouncementAPIService, ) { }

  ngOnInit(): void {

    this.initAnnouncement()

    this.modalS.$modal_Act.subscribe((val) => {
      this.switchModalAct = val;
    });
    this.modalS.$modal_Agr.subscribe((val) => {
      this.switchModalAgr = val;
    });
   
    
  }


  switchModalAct: boolean = false;
  switchModalAgr: boolean = false;


  agregar(){
    
    
    this.modalS.$modal_Agr.emit(true);
    this.switchModalAgr = true;

         
  }
 
  actualizar(data: Event){

    this.dataAnnouncement= data

    this.modalS.$modal_Act.emit(true);
    this.switchModalAct = true;
    
  }

  cerrarSesion(){
    localStorage.removeItem("token");
    this.router.navigateByUrl("/Login")
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
        this.announcementService.deleteAnnouncement(id).subscribe( resp => {
          console.log(resp);
          this.initAnnouncement();
        });
        Swal.fire(
          'Eliminado',
          'Se eliminao de manera exitosa',
          'success'
        )
      }
    })
  }

  ///////////////////////////////


  initAnnouncement(){

    this.announcementService.selectAnnouncement().subscribe(
      resp=>{
      
        this.announcements= resp.events;
        
      }
    )

  }











}
