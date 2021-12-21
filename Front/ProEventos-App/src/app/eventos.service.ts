import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private api = " https://localhost:5001/api/evento";

  constructor(private http: HttpClient) { }

  getEventos(): Observable<any> {
    return this.http.get<any>(this.api);
  }
}
