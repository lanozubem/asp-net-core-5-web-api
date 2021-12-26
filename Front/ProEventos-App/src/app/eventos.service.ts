import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  private _api: string = " https://localhost:5001/api/evento";

  constructor(private http: HttpClient) { }

  getEventos(): Observable<any> {
    return this.http.get<any>(this._api);
  }
}
