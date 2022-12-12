import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { GetATalleresAPI } from './talleres.interface';

@Injectable({
  providedIn: 'root'
})
export class TalleresApiService {

  baseUrl= `${environment.urlBase}/sse/api/event/getAllByEvent/WORKSHOP?page=1`;

  constructor(private http: HttpClient) { }

  selectTalleres(){

    return this.http.get<GetATalleresAPI>(this.baseUrl);

}


  deleteTalleres(id:any){
    
    const desactivateUrl= `${environment.urlBase}/sse/api/event/desactivate/${id}`;
    return this.http.delete(desactivateUrl);

  }


}
