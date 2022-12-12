import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Event } from '../convocatorias-page/Announcement.interface';
import { updateAnnouncement } from './update.interface';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  baseUrl= `${environment.urlBase}/sse/api/event/update/`


  constructor(private http: HttpClient) { }

  $modal_Act = new EventEmitter<boolean>();
  $modal_Agr = new EventEmitter<boolean>();
  




  updateAnnouncement(data: any, id:any){

    const url = `${this.baseUrl}${id}`

    console.log(url);
    console.log(data);
    
    return this.http.patch<updateAnnouncement>(url, data)


  }

}
