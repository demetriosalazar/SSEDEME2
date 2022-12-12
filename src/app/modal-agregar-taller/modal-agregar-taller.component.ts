import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ActualizarTallerService } from '../modal-actualizar-taller/actualizar-taller.service';
import { AddAnnouncementService } from '../modal-agregar/add-announcement.service';


@Component({
  selector: 'app-modal-agregar-taller',
  templateUrl: './modal-agregar-taller.component.html',
  styleUrls: ['./modal-agregar-taller.component.css']
})
export class ModalAgregarTallerComponent implements OnInit {

  constructor(private modalS: ActualizarTallerService , private addAnnouncement: AddAnnouncementService) { }

  ngOnInit(): void {
  }

  title:          string="";
  description:    string="";
  body:           string=""; 
  image:          string="";

  category:       string="Sistemas";
  instructor:     string="";
  initial_date:   string="";
  final_date:     string="";
  location:       string="";        
  modality:       string="Presencial";
  link:           string="";


  agregar(){

    const body = {

     type: "WORKSHOP",
     title:          this.title,
     description:    this.description,
     body:           this.body,
     image:          this.image,
     info: {
       category:      this.category,
       instructor:    this.instructor,
       initial_date:  this.initial_date,
       final_date:    this.final_date,
       location:      this.location,  
       modality:      this.modality,
       link:          this.link
     }
   }

   console.log(body);
   

   this.addAnnouncement.save(body).subscribe(
     resp=>{

         if(resp.status){

           Swal.fire({
             icon: 'success',
             title: `Se ah creado con exito ${this.title}`,
             showConfirmButton: false,
             timer: 1500
           })
         }
         


     },error =>{
       Swal.fire({
         position: 'top-end',
         icon: 'error',
         title: "verifique que todo los capos esten llenos",
         showConfirmButton: false,
         timer: 1500
       })
     }
   )

 }

 closeModal(){
  this.modalS.$modal_Agr.emit(false);

}

}
