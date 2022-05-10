import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrzavaService {
  private baseURL = `http://localhost:8000/api/drzava`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get<any>(`${this.baseURL}`)
  }

  get(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseURL}/${id}`)
  }

  save(data: any): Observable<any> {
    console.log("###### MAkedonija ")
    console.log(data);
    return this.http.post(`${this.baseURL}`, data);
  }

  update(data: any): Observable<any> {
    return this.http.patch<any>(`${this.baseURL}`, data)
  }

  delete(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseURL}/${id}`)
  }
}
