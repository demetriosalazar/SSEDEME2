import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Event } from '../convocatorias-page/Announcement.interface';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal-actualizar',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalActualizarComponent implements OnInit {

     title!:         string    
     description!:         string      
     body!:         string             
     image!:         string            
  
    category!:         string          
    instructor!:         string        
    initial_date!:         string      
    final_date!:         string       
    location!:         string             
    modality!:         string          
    link!:         string             



  constructor(private modalS: ModalService, private router: Router) { 
  }


  ngOnInit(): void {
   
    this.title=            this.data.title;
    this.description=      this.data.description;
    this.body=             this.data.body; 
    this.image=            this.data.image;
  
    this.category=         this.data.info.category;
    this.instructor=       this.data.info.instructor;
    this.initial_date=     this.data.info.initial_date;
    this.final_date=       this.data.info.final_date;
    this.location=         this.data.info.location;        
    this.modality=         this.data.info.modality;
    this.link=             this.data.info.link;


  }

  @Input() data!: Event ;




  closeModal(){
    this.modalS.$modal_Act.emit(false);

  }

  Actualizar(){

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

    this.modalS.updateAnnouncement(body, this.data._id).subscribe(
      resp=>{

        if(resp.status){

          Swal.fire({
            icon: 'success',
            title: `Se ah Actualizado ${this.title}`,
            showConfirmButton: false,
            timer: 1500
          })

          this.router.navigateByUrl("/DEMO")
        }
        


    },error =>{
      console.log(error);
      
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


}