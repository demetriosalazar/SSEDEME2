import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import Swal from 'sweetalert2';
import { ModalService } from '../modal_actualizar/modal.service';
import { AddAnnouncementService } from './add-announcement.service';

@Component({
  selector: 'app-modal-agregar',
  templateUrl: './modal-agregar.component.html',
  styleUrls: ['./modal-agregar.component.css']
})
export class ModalAgregarComponent implements OnInit {

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


  constructor(private modalS: ModalService, private addAnnouncement: AddAnnouncementService) { }

  @Output() emitService = new EventEmitter();


  agregar(){

     const body = {

      type: "ANNOUNCEMENT",
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

            this.emitService.next(body);
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
    console.log('modal cerrado');
    this.modalS.$modal_Agr.emit(false);

  }

}
