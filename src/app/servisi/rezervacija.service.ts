import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RezervacijaService {

  constructor(private http: HttpClient) { }

  public getRezervacijas(): Observable<any> {
    const url = 'http://localhost:8000/api/rezervacija';
    return this.http.get<any>(url);
  }
}
