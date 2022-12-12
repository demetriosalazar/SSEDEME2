import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GetAnnouncementAPI } from './Announcement.interface';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementAPIService {

  baseUrl= `${environment.urlBase}/sse/api/event/getAllByEvent/ANNOUNCEMENT?page=1`;

  constructor(private http: HttpClient) { }



  selectAnnouncement(){

      return this.http.get<GetAnnouncementAPI>(this.baseUrl);

  }

  deleteAnnouncement(id:any){
    
    const desactivateUrl= `${environment.urlBase}/sse/api/event/desactivate/${id}`;
    console.log(desactivateUrl);
    return this.http.delete(desactivateUrl);

  }


}
