import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateAnnouncementAPI } from '../modal-agregar/API.interface';

@Injectable({
  providedIn: 'root'
})
export class AgregarTallerService {

  baseUrl = environment.urlBase


  constructor(private http:HttpClient) { }

    save(body:any){
      const url= `${this.baseUrl}/sse/api/event/create/WORKSHOP`
      return this.http.post<CreateAnnouncementAPI>(url,body)
    }
}
