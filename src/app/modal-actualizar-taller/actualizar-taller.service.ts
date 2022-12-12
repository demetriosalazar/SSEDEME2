import { EventEmitter, Injectable } from '@angular/core';
import { updateWorkshops } from './actualizar-taller.interface';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActualizarTallerService {

  constructor(private http: HttpClient) { }

  baseUrl= `${environment.urlBase}/sse/api/event/update/`

  $modal_Act = new EventEmitter<boolean>();
  $modal_Agr = new EventEmitter<boolean>();

  updateWorkshops(data: any, id:any){

    const url = `${this.baseUrl}${id}`

    console.log(url);
    console.log(data);
    
    return this.http.patch<updateWorkshops>(url, data);


  }

}
