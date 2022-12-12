import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CreateAnnouncementAPI } from './API.interface';

@Injectable({
  providedIn: 'root'
})
export class AddAnnouncementService {

    baseUrl = environment.urlBase


  constructor(
    private http:HttpClient
  ) { }

    save(body:any){
      const url= `${this.baseUrl}/sse/api/event/create/ANNOUNCEMENT`
      return this.http.post<CreateAnnouncementAPI>(url,body)
    }



}
